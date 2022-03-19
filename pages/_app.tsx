import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { appName } from "@/constants/appConfigs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>{appName}</title>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ReduxProvider>
    </>
  );
}
