import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";
export const topSongsApi = createApi({
  reducerPath: "topSongsApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}` }),
  endpoints: (builder) => ({
    getTopSongs: builder.query({
      query: () => "/topSongs",
    }),
  }),
});

export const { useGetTopSongsQuery } = topSongsApi;
