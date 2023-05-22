import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { routeToServer } from '../constants/urls'

export const arabicSongsApi = createApi({
  reducerPath: "arabicSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: routeToServer }),
  endpoints: (builder) => ({
    getTopArabicSongs: builder.query({
      query: () => "topArabicSongs",
    }),
  }),
});

export const { useGetTopArabicSongsQuery } = arabicSongsApi;