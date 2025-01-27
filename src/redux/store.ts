import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { spotifyApiSlice } from './featues/spotifyApiSlice';

// Configure the store
const makeStore = () =>
  configureStore({
    reducer: {
      [spotifyApiSlice.reducerPath]: spotifyApiSlice.reducer,
    },

    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(spotifyApiSlice.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Export the wrapper
export const wrapper = createWrapper<AppStore>(makeStore);
