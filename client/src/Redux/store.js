import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from "../api/hebrewApiSlice";
import { topSongsApi } from "../api/topSongsSlice";
import searchsliceapi from "../api/searchsliceApi";
import languageReducer from "./languageSlice";
import searchResultsReducer from "./searchResultsSlice";
import { songDataApi } from "../api/songDataApiSlice";
import artistApiSlice from "../api/artistApiSlice";
import { youtubeApi } from "../api/youtubeApiSlice";

export default configureStore({
  reducer: {
    languageSelect: languageReducer,
    searchResults: searchResultsReducer,
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [topSongsApi.reducerPath]: topSongsApi.reducer,
    [songDataApi.reducerPath]: songDataApi.reducer,
    [searchsliceapi.reducerPath]: searchsliceapi.reducer,
    [artistApiSlice.reducerPath]: artistApiSlice.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      topSongsApi.middleware,
      searchsliceapi.middleware,
      songDataApi.middleware,
      artistApiSlice.middleware,
      youtubeApi.middleware,
    ]);
  },
});
