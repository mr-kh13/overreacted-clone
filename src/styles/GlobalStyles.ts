import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle((props) => ({
  body: {
    backgroundColor: props.theme.colors.body.bg,
    color: props.theme.colors.body.color,
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: '"Merriweather", "Georgia", serif',
    fontWeight: 400,
    wordWrap: "break-word",
    fontSize: "100%",
    lineHeight: 1.75,
  },
  h1: {
    margin: 0,
  },
  p: {
    margin: 0,
  },
  a: {
    margin: 0,
    textDecoration: "none",
  },
}));
