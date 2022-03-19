import styled from "styled-components";

export const Link = styled.a((props) => ({
  fontSize: "2rem",
  fontWeight: 900,
  color: props.theme.colors.link.primary,
  cursor: "pointer",
  fontFamily: '"Montserrat", sans-serif',
}));
