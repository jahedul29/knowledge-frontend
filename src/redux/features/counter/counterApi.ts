import { api } from '@/redux/api/apiSlice';

const counterApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCounter: builder.query({
      query: () => '',
    }),
  }),
});

export const { useGetCounterQuery } = counterApi;
