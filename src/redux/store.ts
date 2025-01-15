import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

// Configure the store
const makeStore = () =>
  configureStore({
    reducer: {
      // example: exampleReducer, // Add your slices here
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Export the wrapper
export const wrapper = createWrapper<AppStore>(makeStore);
