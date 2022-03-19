import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "@/store";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { appName } from "@/constants/appConfigs";

const persistor = persistStore(store);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>{appName}</title>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </>
  );
}
