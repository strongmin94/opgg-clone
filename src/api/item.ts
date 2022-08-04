import axios from "axios";
import { IItemInfoResponse } from "../datas/item";

export const apiGetItemInfos = async (): Promise<IItemInfoResponse> => {
  const response = await axios.get(
    "http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json"
  );
  return response.data as IItemInfoResponse;
};
