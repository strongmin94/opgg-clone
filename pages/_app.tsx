import type { AppProps } from "next/app";
import { wrapper } from "../src/redux/store";
import GlobalStyle from "../styles/globalStyle";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();
  const persistor = persistStore(store);

  return (
    <>
      <GlobalStyle />
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />;
      </PersistGate>
    </>
  );
}

export default wrapper.withRedux(MyApp);
