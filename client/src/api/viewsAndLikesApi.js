import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addViewsAndLikesApi = createApi({
  reducerPath: "addViewsAndLikes",
  tagTypes: ["viewsAndLikes"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverApiUrl}/coverSong`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
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
    getSongById: builder.query({
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
  useGetSongByIdQuery,
  useToggleLikeMutation,
} = addViewsAndLikesApi;
export default addViewsAndLikesApi;
