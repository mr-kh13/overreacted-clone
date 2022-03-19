import React from "react";
import Image from "next/image";
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
          <Link href="https://mobile.twitter.com/dan_abramov" target="_blank">
            Dan Abramov
          </Link>
          .
        </p>
        <p>I explain with words and code.</p>
      </div>
    </Wrapper>
  );
};
