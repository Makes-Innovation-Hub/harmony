import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "languageSelect",
  initialState: {
    language: "english",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
