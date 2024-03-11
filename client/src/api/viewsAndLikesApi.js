import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addViewsAndLikesApi = createApi({
  reducerPath: "addViewsAndLikes",
  tagTypes: ["viewsAndLikes"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverApiUrl}/coverSong`,
    prepareHeaders: (headers) => {
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addView: builder.mutation({
      query: (id, coverSong) => ({
        url: `/view/${id}`,
        method: "PUT",
        body: coverSong,
      }),
      invalidatesTags: ["viewsAndLikes"],
    }),
    getCoverSongById: builder.query({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ["viewsAndLikes"],
    }),
    toggleLike: builder.mutation({
      query: (id) => ({
        url: `/like/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["viewsAndLikes"],
    }),
  }),
});

export const {
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
} = addViewsAndLikesApi;
export default addViewsAndLikesApi;
