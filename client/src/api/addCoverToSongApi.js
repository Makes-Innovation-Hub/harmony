import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addCoverToSong = createApi({
  reducerPath: "addCoverToSong",
  tagTypes: ["getSongById"],
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}` }),
  endpoints: (builder) => ({
    createCover: builder.mutation({
      query: (coverSong) => ({
        url: `/coverSong/add`,
        method: "POST",
        body: coverSong,
      }),
      invalidatesTags: ["getSongById"],
    }),
    getSongById: builder.query({
      query: (id) => ({
        url: `/songs/find/${id}`,
        method: "GET",
      }),
      providesTags: ["getSongById"],
      transformResponse: (response) => {
        response.coverSong.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        return response;
      },
    }),
  }),
});

export const { useCreateCoverMutation, useGetSongByIdQuery } = addCoverToSong;

export default addCoverToSong;
