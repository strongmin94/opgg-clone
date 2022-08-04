import { IMostInfoResponse } from "../datas/mostInfo";
import { ISummonerResponse } from "../datas/summoner";
import axiosInstance from "./axios";

export const apiGetSummonerInfo = async (summonerName: string): Promise<ISummonerResponse> => {
  const response = await axiosInstance.get(`/summoner/${summonerName}`);
  return response.data as ISummonerResponse;
};

export const apiGetMostInfo = async (summonerName: string) => {
  const response = await axiosInstance.get(`/summoner/${summonerName}/mostInfo`);
  return response.data as IMostInfoResponse;
};
