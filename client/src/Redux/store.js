import { configureStore } from "@reduxjs/toolkit";
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
import topCoversApi from "../api/topCoversApi";
import textToSpeechApi from "../api/textToSpeechApi";

export default configureStore({
  reducer: {
    languageSelect: languageReducer,
    searchResults: searchResultsReducer,
    auth: authReducer,
    currentplaylist: playlistReducer,
    [topSongsApi.reducerPath]: topSongsApi.reducer,
    [songDataApi.reducerPath]: songDataApi.reducer,
    [searchsliceapi.reducerPath]: searchsliceapi.reducer,
    [artistApiSlice.reducerPath]: artistApiSlice.reducer,
    [addCoverToSong.reducerPath]: addCoverToSong.reducer,
    [addViewsAndLikesApi.reducerPath]: addViewsAndLikesApi.reducer,
    [playlistApi.reducerPath]: playlistApi.reducer,
    [topCoversApi.reducerPath]: topCoversApi.reducer,
    [textToSpeechApi.reducerPath]: textToSpeechApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      topSongsApi.middleware,
      searchsliceapi.middleware,
      songDataApi.middleware,
      artistApiSlice.middleware,
      addCoverToSong.middleware,
      addViewsAndLikesApi.middleware,
      playlistApi.middleware,
      topCoversApi.middleware,
      textToSpeechApi.middleware,
    ]);
  },
});
