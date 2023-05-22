import { configureStore } from "@reduxjs/toolkit";
import { hebrewSongsApi } from '../api/hebrewApiSlice'
import { arabicSongsApi } from '../api/arabicApiSlice'

export default configureStore({
  reducer: {
    [hebrewSongsApi.reducerPath]: hebrewSongsApi.reducer,
    [arabicSongsApi.reducerPath]: arabicSongsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      hebrewSongsApi.middleware,
      arabicSongsApi.middleware,
    ]);
  },
});



