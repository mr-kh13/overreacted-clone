import React from "react";
import { Wrapper, Left, Right } from "./Footer.styles";
import { Link } from "../../Link";

export const Footer = () => {
  return (
    <Wrapper>
      <Left>
        <Link href="https://mobile.twitter.com/dan_abramov" target="_blank">
          twiter
        </Link>
        {" • "}
        <Link href="https://github.com/gaearon" target="_blank">
          github
        </Link>
        {" • "}
        <Link
          href="https://stackoverflow.com/users/458193/dan-abramov"
          target="_blank"
        >
          stack overflow
        </Link>
      </Left>
      <Right>
        <Link href="https://overreacted.io/rss.xml" target="_blank">
          rss
        </Link>
      </Right>
    </Wrapper>
  );
};
