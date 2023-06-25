import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import store from "../Redux/store";
import { serverApiUrl } from "../constants/urls";

const searchsliceapi = createApi({
  reducerPath: "searchsliceapi",
  baseQuery: fetchBaseQuery({ baseUrl: serverApiUrl }),
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
