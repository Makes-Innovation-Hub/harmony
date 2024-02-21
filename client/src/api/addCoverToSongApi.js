import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addCoverToSong = createApi({
  reducerPath: "addCoverToSong",
  tagTypes: ["CoverSong"],
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/coverSong` }),
  endpoints: (builder) => ({
    createCover: builder.mutation({
      query: (coverSong) => ({
        url: "/add",
        method: "POST",
        body: coverSong,
      }),
      invalidatesTags: ["CoverSong"],
    }),
  }),
});

export const { useCreateCoverMutation } = addCoverToSong;

export default addCoverToSong;
