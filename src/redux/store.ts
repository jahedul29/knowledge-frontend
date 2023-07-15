import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { api } from './api/apiSlice';
import authSlice from './features/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
