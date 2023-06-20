import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from "../api/hebrewApiSlice";
import { arabicSongsApi } from "../api/arabicApiSlice";
import { lyricsApi } from "../api/lyricsApiSlice";
import searchsliceapi from "../api/searchsliceApi";
import languageReducer from "./languageSlice";
import { songDataApi } from '../api/songDataApiSlice';
import artistApiSlice from "../api/artistApiSlice";

export default configureStore({
  reducer: {
    languageSelect: languageReducer,
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [arabicSongsApi.reducerPath]: arabicSongsApi.reducer,
    [lyricsApi.reducerPath]: lyricsApi.reducer,
    [songDataApi.reducerPath]: songDataApi.reducer,
    [searchsliceapi.reducerPath]: searchsliceapi.reducer,
    [artistApiSlice.reducerPath]: artistApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      arabicSongsApi.middleware,
      lyricsApi.middleware,
      searchsliceapi.middleware,
      songDataApi.middleware,
      artistApiSlice.middleware,
    ]);
  },
});
