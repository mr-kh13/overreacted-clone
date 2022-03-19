import styled from "styled-components";

export const Wrapper = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "0.875rem",
  marginBottom: "3.5rem",
});

export const ProfilePicWrapper = styled.div({
  position: "relative",
  width: "3.5rem",
  height: "3.5rem",
  borderRadius: "50%",
  overflow: "hidden",
});

export const DescriptionWrapper = styled.div({
  maxWidth: "310px",
  p: {
    fontWeight: 400,
  },
});
