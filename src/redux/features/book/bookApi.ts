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
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    getBookDetails: builder.query({
      query: (id: string | undefined) => `/books/${id}`,
    }),
    deleteBook: builder.mutation({
      query: (id) => ({ url: `/books/${id}`, method: 'DELETE' }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useGetBookDetailsQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi;
