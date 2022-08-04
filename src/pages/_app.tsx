import type { AppProps } from "next/app";
import { CustomStore, wrapper } from "../redux/store";
import GlobalStyle from "../styles/globalStyle";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore() as CustomStore;

  return (
    <>
      <GlobalStyle />
      <PersistGate loading={null} persistor={store.__persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
