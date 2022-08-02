import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { apiGetMostInfo, apiGetSummonerInfo } from "../src/api/summoner";
import { emptyMostInfo, IMostInfoResponse } from "../src/interfaces/mostInfo";
import { emptySummoner, ISummoner } from "../src/interfaces/summoner";
import MainLayout from "../src/layouts/mainLayout/mainLayout";
import MainContainer from "../src/modules/main/container/mainContainer";

interface IProps {
  summoner: ISummoner;
  mostInfo: IMostInfoResponse;
}

const Home: NextPage<IProps> = ({ summoner, mostInfo }) => {
  return (
    <>
      <Head>
        <title>{`${summoner.name} - 게임 전적 - League of Legends`}</title>
      </Head>
      <MainLayout>
        <MainContainer summoner={summoner} mostInfo={mostInfo} />
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  try {
    const { summoner } = await apiGetSummonerInfo("Hide on bush");
    const mostInfo = await apiGetMostInfo("Hide on bush");
    return {
      props: {
        summoner,
        mostInfo,
      },
    };
  } catch (ex) {
    console.log(ex);
    return {
      props: {
        summoner: emptySummoner,
        mostInfo: emptyMostInfo,
      },
    };
  }
};

export default Home;
