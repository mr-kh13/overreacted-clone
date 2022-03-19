import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import themeReducer from "./theme/theme.slice";
import postsReducer from "./posts/posts.slice";

export function makeStore() {
  return configureStore({
    reducer: { theme: themeReducer, posts: postsReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
