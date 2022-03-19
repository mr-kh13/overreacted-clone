import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../store";

export interface ThemeState {
  value: "light" | "dark";
}

const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme.value;

export default themeSlice.reducer;
