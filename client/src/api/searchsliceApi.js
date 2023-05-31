import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const searchsliceapi = createApi({
  reducerPath: "searchsliceapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    search: builder.mutation({
      query: (searchTerm) => ({
        url: "/search",
        method: "POST",
        body: { searchTerm },
      }),
    }),
  }),
});

export const { useSearchMutation } = searchsliceapi;
export default searchsliceapi;
