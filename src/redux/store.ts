import { configureStore, Reducer, Store } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { Persistor, persistStore } from "redux-persist";
import { reducer, persistedReducer } from "./rootReducer";

export interface CustomStore extends Store {
  __persistor: Persistor;
}

const makeConfiguredStore = (reducer: Reducer) => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        serializableCheck: false,
      });
    },
  });

  return store;
};

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    const store = makeConfiguredStore(persistedReducer);
    (store as CustomStore).__persistor = persistStore(store);
    return store;
  }
};

export const wrapper = createWrapper(makeStore);
