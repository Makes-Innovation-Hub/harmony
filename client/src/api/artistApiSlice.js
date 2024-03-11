import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const artistApiSlice = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
  endpoints: (builder) => ({
    getArtistData: builder.query({
      query: (artistName) => `/artists/searchArtist?artistName=${artistName}`,
      transformResponse: (response) => response.data[0], // Modify the transformResponse function
    }),
  }),
});

export const { useGetArtistDataQuery, useLazyGetArtistDataQuery } =
  artistApiSlice;
export default artistApiSlice;
