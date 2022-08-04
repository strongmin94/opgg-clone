import { IMatchesResponse } from "../datas/match";
import { IMatchDetail } from "../datas/matchDetail";
import axiosInstance from "./axios";

export const apiGetMatchesBySummoner = async (summonerName: string): Promise<IMatchesResponse> => {
  const response = await axiosInstance.get(`/summoner/${summonerName}/matches`);
  return response.data as IMatchesResponse;
};

export const apiGetMatchDetailByGameId = async (
  summonerName: string,
  gameId: string
): Promise<IMatchDetail> => {
  const response = await axiosInstance.get(`/summoner/${summonerName}/matchDetail/${gameId}`);
  return response.data as IMatchDetail;
};
