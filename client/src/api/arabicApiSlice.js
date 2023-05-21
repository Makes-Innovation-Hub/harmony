import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { topSongsScrappingRoute } from '../constants/urls'

export const arabicSongsApi = createApi({
  reducerPath: "arabicSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: topSongsScrappingRoute }),
  endpoints: (builder) => ({
    getTopArabicSongs: builder.query({
      query: () => "topArabicSongs",
    }),
  }),
});

export const { useGetTopArabicSongsQuery } = arabicSongsApi;