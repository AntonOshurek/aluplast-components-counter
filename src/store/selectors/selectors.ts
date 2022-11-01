import { RootState } from "../../types/store-types";

// GRANULATES SELECTROS
export const granulatesStateSelector = (state: RootState) => state.granulates;
export const getCurrentGranulatesSelector = (UNID: number) => (state: RootState) => state.granulates[UNID];
