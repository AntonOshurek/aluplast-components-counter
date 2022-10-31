import { configureStore } from '@reduxjs/toolkit';
import granulatesSlice from './slices/counter-slice';

export const store = configureStore({
  reducer: {
    granulates: granulatesSlice,
  },
});
