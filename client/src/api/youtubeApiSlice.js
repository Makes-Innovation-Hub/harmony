// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { serverApiUrl } from "../constants/urls";

// export const youtubeApi = createApi({
//   reducerPath: "youtubeApi",
//   baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}` }),
//   endpoints: (builder) => ({
//     postYoutubeSong: builder.mutation({
//       query: ({ artistName, songName }) => ({
//         url: "youtube",
//         method: "POST",
//         body: { artistName, songName },
//       }),
//     }),
//   }),
// });

// export const { usePostYoutubeSongMutation } = youtubeApi;
