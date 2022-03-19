import React from "react";
import NextLink from "next/link";
import { Link } from "./AppName.styles";

export const AppName: React.FC = ({ children }) => {
  return (
    <h1>
      <NextLink href="/">
        <Link>{children}</Link>
      </NextLink>
    </h1>
  );
};
