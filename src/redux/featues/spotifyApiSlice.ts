import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const spotifyApiSlice = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),

  endpoints: builder => ({
    fetchAppCredentials: builder.query<void, void>({
      query: () => 'spotify/app-credentials',
    }),

    generateAuthorizeUrl: builder.mutation<void, void>({
      query: () => ({
        url: 'spotify/user-auth-url',
        method: 'GET',
      }),
    }),

    handleAuthCallback: builder.mutation<void, string>({
      query: (code: string) => ({
        url: `auth/spotify?code=${code}`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useFetchAppCredentialsQuery,
  useGenerateAuthorizeUrlMutation,
  useHandleAuthCallbackMutation,
} = spotifyApiSlice;
