import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const hebrewSongsApi = createApi({
  reducerPath: "hebrewSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/scrap` }),
  endpoints: (builder) => ({
    getTopHebrewSongs: builder.query({
      query: () => "/topHebrewSongs",
    }),
  }),
});

export const { useGetTopHebrewSongsQuery } = hebrewSongsApi;
