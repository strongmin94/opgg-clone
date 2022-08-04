import { ImageObj } from "./match";

export interface IItemObject extends ImageObj {
  itemInfo?: IItem;
}

export interface IItem {
  name?: string;
  description?: string;
  plaintext?: string;
}

export interface IItemList {
  [key: string]: IItem;
}

export interface IItemInfoResponse {
  data: IItemList;
}
