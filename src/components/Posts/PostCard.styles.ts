import styled from "styled-components";

export const Card = styled.div({});

export const Title = styled.h3({
  fontSize: "1.75rem",
  fontFamily: "Montserrat, sans-serif",
  marginBottom: "0.4375rem",
  marginTop: "3.5rem",
  lineHeight: 1.1,
  fontWeight: 900,
  a: {
    textDecoration: "none",
  },
});

export const MetaWrapper = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
});

export const Meta = styled.small({});

export const Description = styled.p({
  marginBottom: "1.75rem",
});
