import { configureStore, Reducer } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";
import { reducer, persistedReducer } from "./rootReducer";

const makeConfiguredStore = (reducer: Reducer) =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    const store = makeConfiguredStore(persistedReducer);
    const persistor = persistStore(store);
    return { persistor, ...store };
  }
};

export const wrapper = createWrapper(makeStore);
