import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const addViewsAndLikesApi = createApi({
  reducerPath: "addViewsAndLikes",
  tagTypes: ["viewsAndLikes"],
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/coverSong` }),
  endpoints: (builder) => ({
    addView: builder.mutation({
      query: (updatedCover) => ({
        url: `/add-view/${updatedCover.id}`,
        method: "PUT",
        body: updatedCover,
      }),
      invalidatesTags: ["viewsAndLikes"],
    }),
  }),
});

export const { useAddViewMutation } = addViewsAndLikesApi;
export default addViewsAndLikesApi;
