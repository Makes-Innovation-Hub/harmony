import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from "../api/hebrewApiSlice";
import { arabicSongsApi } from "../api/arabicApiSlice";
import { lyricsApi } from "../api/lyricsApiSlice";
import searchsliceapi from "../api/searchsliceApi";
import languageSlice from "./languageSlice";
import selectedSongSlice from './selectedSongSlice';
export default configureStore({
  reducer: {
    languageSelect: languageSlice,
    selectedSong: selectedSongSlice,
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [arabicSongsApi.reducerPath]: arabicSongsApi.reducer,
    [lyricsApi.reducerPath]: lyricsApi.reducer,
    [searchsliceapi.reducerPath]: searchsliceapi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      arabicSongsApi.middleware,
      lyricsApi.middleware,
      searchsliceapi.middleware,
    ]);
  },
});
