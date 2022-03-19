import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import themeReducer from "./theme/theme.slice";
// import postsReducer from "./posts/posts.slice";
import { postsApi } from "./posts/posts.apis";

export function makeStore() {
  return configureStore({
    reducer: { theme: themeReducer, [postsApi.reducerPath]: postsApi.reducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postsApi.middleware),
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
