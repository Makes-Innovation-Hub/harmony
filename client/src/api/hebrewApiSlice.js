import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { topSongsScrappingRoute } from '../constants/urls'

export const hebrewSongsApi = createApi({
  reducerPath: "hebrewSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: topSongsScrappingRoute }),
  endpoints: (builder) => ({
    getTopHebrewSongs: builder.query({
      query: () => "topHebrewSongs",
    }),
  }),
});

export const { useGetTopHebrewSongsQuery } = hebrewSongsApi;