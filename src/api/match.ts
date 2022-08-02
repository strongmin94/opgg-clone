import axios from "axios";
import { IMatchesResponse } from "../datas/match";

export const apiGetMatchesBySummoner = async (summonerName: string): Promise<IMatchesResponse> => {
  const response = await axios.get(`https://codingtest.op.gg/api/summoner/${summonerName}/matches`);
  return response.data as IMatchesResponse;
};
