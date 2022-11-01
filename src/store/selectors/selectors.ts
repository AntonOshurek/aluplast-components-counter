import { RootState } from "../../types/store-types";
import { GranulatesStoreDataType, GranulateItemType } from "../../types/data-types";

// GRANULATES SELECTROS
export const getGranulatesStateSelector = (state: RootState): GranulatesStoreDataType => state.granulates;
export const getCurrentGranulatesSelector = (UNID: number) => (state: RootState): GranulateItemType => state.granulates[UNID];
