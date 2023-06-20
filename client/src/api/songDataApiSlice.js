import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const songDataApi = createApi({
    reducerPath: "songDataApi",
    baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
    endpoints: (builder) => ({
        songData: builder.mutation({
            query: ({ artist, song }) => {
                return {
                    url: "/songs/",
                    method: "PUT",
                    body: { artist, song },
                };
            },
        }),
    }),
});

export const { useSongDataMutation } = songDataApi;
