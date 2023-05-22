import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { routeToServer } from '../constants/urls';

export const lyricsApi = createApi({
  reducerPath: "lyricsApi",
  baseQuery: fetchBaseQuery({ baseUrl: routeToServer }),
  endpoints: (builder) => ({
    getLyrics: builder.query({
      queryFn: async ({ artistName, songName }) => {
        const response = await fetch(`${routeToServer}/${artistName}/${songName}`);
        if (!response.ok) {
          throw new Error("Failed to fetch lyrics");
        }
        const data = await response.json();
        return { data };
      },
    }),
  }),
});

export const { useLazyGetLyricsQuery } = lyricsApi;
