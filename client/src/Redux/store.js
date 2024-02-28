import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from "../api/hebrewApiSlice";
import { topSongsApi } from "../api/topSongsSlice";
import searchsliceapi from "../api/searchsliceApi";
import languageReducer from "./languageSlice";
import searchResultsReducer from "./searchResultsSlice";
import { songDataApi } from "../api/songDataApiSlice";
import artistApiSlice from "../api/artistApiSlice";
import addCoverToSong from "../api/addCoverToSongApi";
import addViewsAndLikesApi from "../api/viewsAndLikesApi";
import authReducer from "./authSlice";
import { playlistApi } from "../api/playlistApiSlice";
import playlistReducer from "./playlistSlice";

export default configureStore({
  reducer: {
    languageSelect: languageReducer,
    searchResults: searchResultsReducer,
    auth: authReducer,
    currentplaylist: playlistReducer,
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [topSongsApi.reducerPath]: topSongsApi.reducer,
    [songDataApi.reducerPath]: songDataApi.reducer,
    [searchsliceapi.reducerPath]: searchsliceapi.reducer,
    [artistApiSlice.reducerPath]: artistApiSlice.reducer,
    [addCoverToSong.reducerPath]: addCoverToSong.reducer,
    [addViewsAndLikesApi.reducerPath]: addViewsAndLikesApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      topSongsApi.middleware,
      searchsliceapi.middleware,
      songDataApi.middleware,
      artistApiSlice.middleware,
      addCoverToSong.middleware,
      addViewsAndLikesApi.middleware,
      playlistApi.middleware,
    ]);
  },
});
