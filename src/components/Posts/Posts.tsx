import React from "react";
import { useGetPostsQuery } from "@/store/posts/posts.apis";
import { PostCard } from "./PostCard";

export const Posts = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => {
        return (
          <PostCard
            key={post?.id}
            id={post?.id}
            title={post?.title}
            date={post?.date || "-"}
            readProximity={post?.readingTime || ""}
            description={post?.body}
          />
        );
      })}
    </div>
  );
};
