import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const textToSpeechApi = createApi({
  reducerPath: "textToSpeech",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/textToSpeech` }),
  endpoints: (builder) => ({
    textToSpeech: builder.mutation({
      query: ({ lyrics }) => ({
        url: "/generate-speech",
        method: "POST",
        body: { lyrics },
      }),
    }),
  }),
});

export const { useTextToSpeechMutation } = textToSpeechApi;
export default textToSpeechApi;
