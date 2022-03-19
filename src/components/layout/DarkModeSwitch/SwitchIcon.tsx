import React from "react";
import styled from "styled-components";

const Icon = styled.img({
  width: 16,
  height: 16,
});

const IconWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
});

type SwitchIconProps = {
  src: string;
  alt?: string;
};

export const SwitchIcon = ({ src, alt }: SwitchIconProps) => (
  <IconWrapper>
    <Icon src={src} alt={alt} />
  </IconWrapper>
);
