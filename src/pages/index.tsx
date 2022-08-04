import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import MainLayout from "../layouts/mainLayout/mainLayout";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>롤 전적 검색 OP.GG - 전적 검색, 관전, 리플레이, 챔피언 공략, 카운터, 랭킹</title>
      </Head>
      <MainLayout>
        <></>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: `/summoner/${encodeURIComponent("Hide on bush")}`,
    },
  };
};

export default HomePage;
