import config from '@/config';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: config.api_url,
    prepareHeaders: (headers, { getState }) => {
      const { auth } = getState() as RootState;
      // Conditionally set the Authorization header based on the endpoint requirement
      if (auth.accessToken) {
        headers.set('authorization', `${auth.accessToken}`);
      }
      return headers;
    },
  }),
  tagTypes: [''],
  endpoints: () => ({}),
});
