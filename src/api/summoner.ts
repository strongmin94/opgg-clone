import axios from "axios";
import { IMostInfoResponse } from "../interfaces/mostInfo";
import { ISummonerResponse } from "../interfaces/summoner";

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
