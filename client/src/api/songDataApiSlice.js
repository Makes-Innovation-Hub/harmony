import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const songDataApi = createApi({
  reducerPath: "songDataApi",
  tagTypes: ["songData"],
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    songData: builder.mutation({
      query: ({ artist, song, coverArt }) => ({
        url: "/songs/",
        method: "PUT",
        body: { artist, song, coverArt },
      }),
      invalidatesTags: ["songData"],
    }),
  }),
});

export const { useSongDataMutation } = songDataApi;
