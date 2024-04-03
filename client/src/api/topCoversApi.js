import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const topCoversApi = createApi({
  reducerPath: "topCoversApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/coverSong` }),
  endpoints: (builder) => ({
    getTopCovers: builder.query({
      query: (language) => ({
        url: `/top-covers`,
        method: "GET",
        params: { language },
      }),
      transformResponse: (res) => {
        return res.sort((a, b) => b.likes.length - a.likes.length);
      },
    }),
  }),
});

export const { useGetTopCoversQuery } = topCoversApi;
export default topCoversApi;
