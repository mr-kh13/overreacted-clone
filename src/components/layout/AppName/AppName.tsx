import React from "react";
import NextLink from "next/link";
import { Link, Wrapper } from "./AppName.styles";

export const AppName: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <NextLink href="/">
        <Link>{children}</Link>
      </NextLink>
    </Wrapper>
  );
};
