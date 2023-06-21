import { createSlice } from "@reduxjs/toolkit";

export const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    results: "",
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
