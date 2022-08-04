import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { apiGetMatchDetailByGameId, apiGetMatchesBySummoner } from "../../../api/match";
import { apiGetMostInfo, apiGetSummonerInfo } from "../../../api/summoner";
import { emptyMatchesResponse, IMatchesResponse } from "../../../datas/match";
import { IMatchDetail } from "../../../datas/matchDetail";
import { emptyMostInfoResponse, IMostInfoResponse } from "../../../datas/mostInfo";
import { emptySummoner, ISummoner } from "../../../datas/summoner";
import MainLayout from "../../../layouts/mainLayout/mainLayout";
import SummonerContainer from "../../../modules/summoner/container/summonerContainer";

interface IProps {
  summoner: ISummoner;
  mostInfo: IMostInfoResponse;
  matches: IMatchesResponse;
}

const SummonerPage: NextPage<IProps> = ({ summoner, mostInfo, matches }) => {
  return (
    <>
      <Head>
        <title>{`${summoner.name} - 게임 전적 - League of Legends`}</title>
      </Head>
      <MainLayout>
        <SummonerContainer summoner={summoner} mostInfo={mostInfo} matches={matches} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
  const {
    query: { summonerName },
  } = context;
  const targetName: string =
    typeof summonerName === "string" ? encodeURIComponent(summonerName) : "Hide on bush";

  try {
    const [resSummoner, resMostInfo, resMatches] = await Promise.allSettled([
      apiGetSummonerInfo(targetName),
      apiGetMostInfo(targetName),
      apiGetMatchesBySummoner(targetName),
    ]);

    if (resMatches.status === "fulfilled") {
      const gameIds = resMatches.value.games.map((item) => item.gameId);
      const promiseList = gameIds.map((gameId) => apiGetMatchDetailByGameId(targetName, gameId));
      const resMatchInfos = await Promise.allSettled(promiseList);
      const matchInfos = resMatchInfos
        .filter((item): item is PromiseFulfilledResult<IMatchDetail> => item.status === "fulfilled")
        .map((item) => item.value);

      resMatches.value.games = resMatches.value.games.map((item) => {
        item.gameDetail = matchInfos.find((game) => game.gameId === item.gameId);
        return item;
      });
    }

    return {
      props: {
        summoner: resSummoner.status === "fulfilled" ? resSummoner.value.summoner : emptySummoner,
        mostInfo: resMostInfo.status === "fulfilled" ? resMostInfo.value : emptyMostInfoResponse,
        matches: resMatches.status === "fulfilled" ? resMatches.value : emptyMatchesResponse,
      },
    };
  } catch (ex: any) {
    console.log(ex.code);
    return {
      props: {
        summoner: emptySummoner,
        mostInfo: emptyMostInfoResponse,
        matches: emptyMatchesResponse,
      },
    };
  }
};

export default SummonerPage;
