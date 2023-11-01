import { configureStore } from '@reduxjs/toolkit';
import pigmentsSlice from './slices/pigments-slice';
import gumsSlice from './slices/gums-slice';
import chemistrySlice from './slices/chemistry-slice';
import chemistryExtrusionSlice from './slices/chemistry/chemistry-extrusion-slice';
import chemistryVeneerSlice from './slices/chemistry/chemistry-veneer-slice';

export const store = configureStore({
  reducer: {
    pigments: pigmentsSlice,
    gums: gumsSlice,
    chemistry: chemistrySlice,
    chemistryExtrusion: chemistryExtrusionSlice,
    chemistryVeneer: chemistryVeneerSlice,
  },
});
