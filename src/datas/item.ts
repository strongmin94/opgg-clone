import { ImageObj } from "./match";

export interface IItem extends ImageObj {
  name: string;
  description: string;
  plaintext: string;
}

export interface IItemList {
  [key: string]: IItem;
}

export interface IItemInfoResponse {
  data: IItemList;
}
