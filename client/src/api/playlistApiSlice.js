import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const playlistApi = createApi({
  reducerPath: "playlistApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    getPlaylistById: builder.query({
      query: (playlistId) => `/playlist/${playlistId}`,
    }),
  }),
});

export const { useGetPlaylistByIdQuery } = playlistApi;
