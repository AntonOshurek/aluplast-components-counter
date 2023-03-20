import { configureStore } from '@reduxjs/toolkit';
import pigmentsSlice from './slices/pigments-slice';
import gumsSlice from './slices/gums-slice';
import chemistrySlice from './slices/chemistry-slice';

export const store = configureStore({
  reducer: {
    pigments: pigmentsSlice,
    gums: gumsSlice,
    chemistry: chemistrySlice,
  },
});
