import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const arabicSongsApi = createApi({
  reducerPath: "arabicSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    getTopArabicSongs: builder.mutation({
      query: () => {
        return {
          url: "topSongs",
          method: "POST",
          body: { date: new Date() },
        };
      },
    }),
  }),
});

export const { useGetTopArabicSongsMutation } = arabicSongsApi;
