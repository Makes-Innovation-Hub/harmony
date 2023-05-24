import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const arabicSongsApi = createApi({
  reducerPath: "arabicSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    getTopArabicSongs: builder.query({
      query: () => "topArabicSongs",
    }),
  }),
});

export const { useGetTopArabicSongsQuery } = arabicSongsApi;
