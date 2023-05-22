import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { topSongsScrappingRoute } from '../constants/urls'

export const lyricsApi = createApi({
  reducerPath: "lyricsApi",
  baseQuery: fetchBaseQuery({ baseUrl: topSongsScrappingRoute }),
  endpoints: (builder) => ({
    getLyrics: builder.query({
        query: ({ artistName, songName }) => `/${artistName}/${songName}`,
    }),
  }),
});

export const { useGetLyricsQuery } = lyricsApi;