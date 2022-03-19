import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theme/theme.slice";
import { postsApi } from "./posts/posts.apis";

export const rootReducer = combineReducers({
  theme: themeReducer,
  [postsApi.reducerPath]: postsApi.reducer,
});
