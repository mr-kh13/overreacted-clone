import styled from "styled-components";

export const Link = styled.a((props) => ({
  color: props.theme.colors.primary,
  cursor: "pointer",
  textDecoration: "underline",
  ":hover": {
    textDecoration: "none",
  },
  ":active": {
    textDecoration: "none",
  },
}));
