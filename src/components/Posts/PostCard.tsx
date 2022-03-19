import React from "react";
import NextLink from "next/link";
import { Link } from "../Link";
import { Card, Title, MetaWrapper, Meta, Description } from "./PostCard.styles";

type PostCardProps = {
  id: number;
  title: string;
  date: string;
  readProximity: string;
  description: string;
};

export const PostCard = ({
  id,
  title,
  date,
  readProximity,
  description,
}: PostCardProps) => {
  return (
    <Card>
      <Title>
        <NextLink href={`/${id}`}>
          <Link>{title}</Link>
        </NextLink>
      </Title>
      <MetaWrapper>
        <Meta>
          {date} • {readProximity}
        </Meta>
      </MetaWrapper>
      <Description>{description}</Description>
    </Card>
  );
};
