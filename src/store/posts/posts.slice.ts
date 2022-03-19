import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as postsApis from "./posts.apis";
import { Post } from "./posts.types";
import { sortPosts } from "./posts.utils";
import { AppState } from "../store";

export interface PostsState {
  status: "idle" | "loading" | "failed";
  posts: Post[];
}

const initialState: PostsState = {
  status: "idle",
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await postsApis.fetchPosts();
  return response;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = sortPosts(action.payload);
      });
  },
});

export const selectPosts = (state: AppState) => state.posts.posts;

export default postsSlice.reducer;
