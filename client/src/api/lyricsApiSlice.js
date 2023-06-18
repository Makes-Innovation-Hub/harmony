import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

console.log("base url:", serverApiUrl);
export const lyricsApi = createApi({
  reducerPath: "lyricsApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    postGoogleLyrics: builder.mutation({
      query: (songData) => {
        console.log("the song data:", songData);
        return {
          url: "googleLyrics",
          method: "POST",
          body: songData,
        };
      },
    }),
  }),
});

export const { usePostGoogleLyricsMutation } = lyricsApi;
