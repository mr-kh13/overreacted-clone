import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ProfilePicWrapper, Wrapper } from "./Introduction.styles";
import { Link } from "../Link";

export const Introduction = () => {
  return (
    <Wrapper>
      <ProfilePicWrapper>
        <Image src="/assets/profile-pic.jpeg" layout="fill" />
      </ProfilePicWrapper>

      <div>
        <p>
          Personal blog by{" "}
          <NextLink href="/">
            <Link>Dan Abramov</Link>
          </NextLink>
          .
        </p>
        <p>I explain with words and code.</p>
      </div>
    </Wrapper>
  );
};
