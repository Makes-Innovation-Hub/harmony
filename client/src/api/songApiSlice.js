import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const songApi = createApi({
  reducerPath: "songApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    getSongData: builder.query({
      query: ({ songName, artistName }) =>
        `songs/searchSong?songName=${songName}&artistName=${artistName}`,
      transformResponse: (response) => response.data[0],
    }),
  }),
});

export const { useGetSongDataQuery } = songApi;
export default songApi;
