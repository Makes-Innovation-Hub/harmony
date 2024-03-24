import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { serverApiUrl } from "../constants/urls";

const textToSpeechApi = createApi({
  reducerPath: "textToSpeech",
  tagTypes: ["tts"],
  baseQuery: fetchBaseQuery({ baseUrl: `${serverApiUrl}/textToSpeech` }),
  endpoints: (builder) => ({
    textToSpeech: builder.mutation({
      query: ({ lyrics }) => ({
        url: "/generate-speech",
        method: "POST",
        body: { lyrics },
      }),
      invalidatesTags: ["tts"],
    }),
  }),
});

export const { useTextToSpeechMutation } = textToSpeechApi;
export default textToSpeechApi;
