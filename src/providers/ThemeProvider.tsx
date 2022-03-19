import React, { useMemo } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { useAppSelector } from "@/store/hooks";
import { selectTheme } from "@/store/theme/theme.slice";
import { lightTheme } from "src/themes/lightTheme";
import { darkTheme } from "src/themes/darkTheme";
import { GlobalStyles } from "@/styles/GlobalStyles";

export const ThemeProvider: React.FC = ({ children }) => {
  const theme = useAppSelector(selectTheme);

  const currentTheme = useMemo(() => {
    if (theme === "dark") return darkTheme;
    return lightTheme;
  }, [theme]);
  console.log(theme);
  return (
    <Provider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </Provider>
  );
};
