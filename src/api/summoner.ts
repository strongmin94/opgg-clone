import axios from "axios";
import { IMostInfoResponse } from "../datas/mostInfo";
import { ISummonerResponse } from "../datas/summoner";

export const apiGetSummonerInfo = async (summonerName: string): Promise<ISummonerResponse> => {
  const response = await axios.get(`https://codingtest.op.gg/api/summoner/${summonerName}`);
  return response.data as ISummonerResponse;
};

export const apiGetMostInfo = async (summonerName: string) => {
  const response = await axios.get(
    ` https://codingtest.op.gg/api/summoner/${summonerName}/mostInfo`
  );
  return response.data as IMostInfoResponse;
};
