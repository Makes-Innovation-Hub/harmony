import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addViewsAndLikesApi = createApi({
  reducerPath: "addViewsAndLikes",
  tagTypes: ["viewsAndLikes"],
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/coverSong` }),
  endpoints: (builder) => ({
    addView: builder.mutation({
      query: (id, coverSong) => ({
        url: `/view/${id}`,
        method: "PUT",
        body: coverSong,
      }),
      invalidatesTags: ["viewsAndLikes"],
    }),
    getSongById: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["viewsAndLikes"],
    }),
  }),
});

export const { useAddViewMutation, useGetSongByIdQuery } = addViewsAndLikesApi;
export default addViewsAndLikesApi;
