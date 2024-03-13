import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addViewsAndLikesApi = createApi({
  reducerPath: "addViewsAndLikes",
  tagTypes: ["songCover"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverApiUrl}`,
    prepareHeaders: (headers) => {
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    addView: builder.mutation({
      query: (id, coverSong) => ({
        url: `/coverSong/view/${id}`,
        method: "PUT",
        body: coverSong,
      }),
      invalidatesTags: ["songCover"],
    }),
    getCoverSongById: builder.query({
      query: (id) => ({
        url: `/coverSong/${id}`,
      }),
      providesTags: ["songCover"],
    }),
    toggleLike: builder.mutation({
      query: (id) => ({
        url: `/coverSong/like/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["songCover"],
    }),
    addComment: builder.mutation({
      query: ({ id, content }) => ({
        url: `/comments/add/${id}`,
        method: "POST",
        body: { content },
      }),
      invalidatesTags: ["songCover"],
    }),
  }),
});

export const {
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
  useAddCommentMutation,
} = addViewsAndLikesApi;
export default addViewsAndLikesApi;
