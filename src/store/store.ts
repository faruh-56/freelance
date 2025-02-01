import { configureStore } from '@reduxjs/toolkit';
import { JobsApi } from './api/freelance';

export const store = configureStore({
  reducer: {
    [JobsApi.reducerPath]: JobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(JobsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

