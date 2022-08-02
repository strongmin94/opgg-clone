import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { apiGetMatchesBySummoner } from "../src/api/match";
import { apiGetMostInfo, apiGetSummonerInfo } from "../src/api/summoner";
import { emptyMatchesResponse, IMatchesResponse } from "../src/datas/match";
import { emptyMostInfoResponse, IMostInfoResponse } from "../src/datas/mostInfo";
import { emptySummoner, ISummoner } from "../src/datas/summoner";
import MainLayout from "../src/layouts/mainLayout/mainLayout";
import MainContainer from "../src/modules/main/container/mainContainer";

interface IProps {
  summoner: ISummoner;
  mostInfo: IMostInfoResponse;
  matches: IMatchesResponse;
}

const Home: NextPage<IProps> = ({ summoner, mostInfo, matches }) => {
  return (
    <>
      <Head>
        <title>{`${summoner.name} - 게임 전적 - League of Legends`}</title>
      </Head>
      <MainLayout>
        <MainContainer summoner={summoner} mostInfo={mostInfo} matches={matches} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  try {
    const { summoner } = await apiGetSummonerInfo("Hide on bush");
    const mostInfo = await apiGetMostInfo("Hide on bush");
    const matches = await apiGetMatchesBySummoner("Hide on bush");

    return {
      props: {
        summoner,
        mostInfo,
        matches,
      },
    };
  } catch (ex) {
    console.log(ex);
    return {
      props: {
        summoner: emptySummoner,
        mostInfo: emptyMostInfoResponse,
        matches: emptyMatchesResponse,
      },
    };
  }
};

export default Home;
