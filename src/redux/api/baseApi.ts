import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://islamic-school-server-ten.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "user", "quran-ls"],
});
