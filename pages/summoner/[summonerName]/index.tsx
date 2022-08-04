import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { apiGetItemInfos } from "../../../src/api/item";
import { apiGetMatchDetailByGameId, apiGetMatchesBySummoner } from "../../../src/api/match";
import { apiGetMostInfo, apiGetSummonerInfo } from "../../../src/api/summoner";
import { emptyMatchesResponse, IMatchesResponse } from "../../../src/datas/match";
import { IMatchDetail } from "../../../src/datas/matchDetail";
import { emptyMostInfoResponse, IMostInfoResponse } from "../../../src/datas/mostInfo";
import { emptySummoner, ISummoner } from "../../../src/datas/summoner";
import MainLayout from "../../../src/layouts/mainLayout/mainLayout";
import SummonerContainer from "../../../src/modules/summoner/container/summonerContainer";
import { updateItemList } from "../../../src/redux/itemListSlice";
import { wrapper } from "../../../src/redux/store";

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

export const getServerSideProps: GetServerSideProps<IProps> = wrapper.getServerSideProps(
  (store) => async (context) => {
    const {
      query: { summonerName },
    } = context;
    const targetName: string = typeof summonerName === "string" ? summonerName : "Hide on bush";

    try {
      const [resSummoner, resMostInfo, resMatches, resItemInfos] = await Promise.allSettled([
        apiGetSummonerInfo(targetName),
        apiGetMostInfo(targetName),
        apiGetMatchesBySummoner(targetName),
        apiGetItemInfos(),
      ]);

      if (resItemInfos.status === "fulfilled") {
        store.dispatch(updateItemList(resItemInfos.value.data));
      }

      if (resMatches.status === "fulfilled") {
        const gameIds = resMatches.value.games.map((item) => item.gameId);
        const promiseList = gameIds.map((gameId) => apiGetMatchDetailByGameId(targetName, gameId));
        const resMatchInfos = await Promise.allSettled(promiseList);
        const matchInfos = resMatchInfos
          .filter(
            (item): item is PromiseFulfilledResult<IMatchDetail> => item.status === "fulfilled"
          )
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
          itemInfos: resItemInfos.status === "fulfilled" ? resItemInfos.value.data : {},
        },
      };
    } catch (ex: any) {
      console.log(ex.code);
      return {
        props: {
          summoner: emptySummoner,
          mostInfo: emptyMostInfoResponse,
          matches: emptyMatchesResponse,
          itemInfos: {},
        },
      };
    }
  }
);

export default SummonerPage;
