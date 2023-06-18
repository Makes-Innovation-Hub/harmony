import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

export const topSongsApi = createApi({
    reducerPath: "topSongsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/topSongs` }),
    endpoints: (builder) => ({
        getTopSongs: builder.query({
            query: () => "",
        }),
    }),
});

export const { useGetTopSongsQuery } = topSongsApi;
