import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lyricsApi = createApi({
  reducerPath: 'lyricsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.genius.com/search' }),
  endpoints: (builder) => ({
    getLyrics: builder.query({
      query: (params) => `${params.artist}/${params.title}`,
    }),
  }),
});

export const { useGetLyricsQuery } = lyricsApi;
