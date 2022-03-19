import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "./posts.types";
import { sortPosts, transformPost } from "./posts.utils";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      transformResponse: (response: Post[]) => sortPosts(response),
    }),
    getPostsById: builder.query<Post, string>({
      query: (postId) => `posts/${postId}`,
      transformResponse: (response: Post) => transformPost(response),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostsByIdQuery } = postsApi;
