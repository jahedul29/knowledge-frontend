import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page, limit }) => `/books?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetBooksQuery } = bookApi;
