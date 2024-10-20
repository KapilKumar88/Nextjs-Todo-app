import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders(headers, api) {
      // headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: () => ({}),
});
