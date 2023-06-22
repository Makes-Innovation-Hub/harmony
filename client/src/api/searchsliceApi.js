import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import store from "../Redux/store";

const searchsliceapi = createApi({
  reducerPath: "searchsliceapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    search: builder.mutation({
      query: (searchTerm) => {
        const state = store.getState();
        const targetLanguage = state.languageSelect;
        return {
          url: "/search",
          method: "POST",
          body: { searchTerm, targetLanguage },
        };
      },
    }),
  }),
});

export const { useSearchMutation } = searchsliceapi;
export default searchsliceapi;
