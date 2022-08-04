import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Array<string> = [];

const SearchItemSlice = createSlice({
  name: "searchItem",
  initialState,
  reducers: {
    addSearchList: (state, action: PayloadAction<string>) => {
      return Array.from(new Set([action.payload].concat(state))).slice(0, 8);
    },
    removeSearchList: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item !== action.payload);
    },
    clearSearchItem: () => {
      return initialState;
    },
  },
});

export const { addSearchList, removeSearchList, clearSearchItem } = SearchItemSlice.actions;
export default SearchItemSlice.reducer;
