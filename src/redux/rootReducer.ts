import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, combineReducers } from "redux";
import { Reducer } from "@reduxjs/toolkit";
import itemListSlice from "./itemListSlice";
import searchListSlice from "./searchListSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const combinedReducer = combineReducers({
  searchList: searchListSlice,
  itemList: itemListSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["itemList"],
};

const rootReducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return combinedReducer(state, action);
  }
};

export type RootState = ReturnType<typeof combinedReducer>;
export const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);
export const reducer = rootReducer as Reducer;
