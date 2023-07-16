import { api } from '@/redux/api/apiSlice';

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    getMyProfile: builder.query({
      query: () => ({
        url: `/auth/my-profile`,
      }),
    }),
  }),
});

export const { useLoginMutation, useGetMyProfileQuery } = authApi;
