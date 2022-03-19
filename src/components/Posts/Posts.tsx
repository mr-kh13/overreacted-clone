import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchPosts, selectPosts } from "@/store/posts/posts.slice";
import { PostCard } from "./PostCard";

export const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
