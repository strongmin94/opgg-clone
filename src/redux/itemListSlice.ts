import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IItemList } from "../datas/item";

const initialState: IItemList = {};

const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    updateItemList: (state, action: PayloadAction<IItemList>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearItemList: () => {
      return initialState;
    },
  },
});

export const { updateItemList, clearItemList } = itemListSlice.actions;
export default itemListSlice.reducer;
