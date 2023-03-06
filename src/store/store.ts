import { configureStore } from '@reduxjs/toolkit';
import granulatesSlice from './slices/granulates-slice';
import gumsSlice from './slices/gums-slice';

export const store = configureStore({
  reducer: {
    granulates: granulatesSlice,
    gums: gumsSlice,
  },
});
