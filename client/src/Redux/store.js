import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from '../api/hebrewApiSlice'
import { arabicSongsApi } from '../api/arabicApiSlice'
import { lyricsApi } from "../api/lyricsApi";

export default configureStore({
  reducer: {
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [arabicSongsApi.reducerPath]: arabicSongsApi.reducer,
    [lyricsApi.reducerPath]: lyricsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      arabicSongsApi.middleware,
      lyricsApi.middleware,
    ]);
  },
});



