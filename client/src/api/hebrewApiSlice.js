import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { routeToServer } from '../constants/urls'

export const hebrewSongsApi = createApi({
  reducerPath: "hebrewSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: routeToServer }),
  endpoints: (builder) => ({
    getTopHebrewSongs: builder.query({
      query: () => "topHebrewSongs",
    }),
  }),
});

export const { useGetTopHebrewSongsQuery } = hebrewSongsApi;