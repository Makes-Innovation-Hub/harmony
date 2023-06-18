import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from "../api/hebrewApiSlice";
import { arabicSongsApi } from "../api/arabicApiSlice";
import { lyricsApi } from "../api/lyricsApiSlice";
import { topSongsApi } from '../api/topSongsApiSlice';
import searchsliceapi from "../api/searchsliceApi";
import languageSlice from "./languageSlice";
export default configureStore({
  reducer: {
    languageSelect: languageSlice,
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [arabicSongsApi.reducerPath]: arabicSongsApi.reducer,
    [topSongsApi.reducerPath]: topSongsApi.reducer,
    [lyricsApi.reducerPath]: lyricsApi.reducer,
    [searchsliceapi.reducerPath]: searchsliceapi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      arabicSongsApi.middleware,
      lyricsApi.middleware,
      topSongsApi.middleware,
      searchsliceapi.middleware,
    ]);
  },
});
