import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ page, limit }) => `/books?page=${page}&limit=${limit}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
    }),
    getBookDetails: builder.query({
      query: (id: string | undefined) => `/books/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation, useGetBookDetailsQuery } =
  bookApi;
