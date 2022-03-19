import styled from "styled-components";

export const Wrapper = styled.a((props) => ({
  fontSize: "1.98818rem",
  lineHeight: "2.625rem",
  fontWeight: 900,
  color: props.theme.colors.header.color,
  fontFamily: '"Montserrat", sans-serif',
  margin: 0,
  padding: 0,
}));

export const Link = styled.a((props) => ({
  color: props.theme.colors.header.color,
  cursor: "pointer",
  textDecoration: "none",
  boxShadow: "none",
}));
