import { baseApi } from "./baseApi";

const quranLSApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuranLSUsers: builder.query({
      query: () => {
        return {
          url: "/quran-ls-registration",
          method: "GET",
          //   params: args,
        };
      },
      providesTags: ["quran-ls"],
    }),
    addQuranLSUserRegistration: builder.mutation({
      query: (userInfo) => ({
        url: "/quran-ls-registration/create-quran-ls-registration",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["quran-ls"],
    }),
    updateQuranLSUser: builder.mutation({
      query: (payload) => {
        return {
          url: `/quran-ls-registration/${payload.studentId}`,
          method: "PATCH",
          body: payload.updatedData,
        };
      },
      invalidatesTags: ["quran-ls"],
    }),
  }),
});

export const {
  useAddQuranLSUserRegistrationMutation,
  useGetQuranLSUsersQuery,
  useUpdateQuranLSUserMutation,
} = quranLSApi;
