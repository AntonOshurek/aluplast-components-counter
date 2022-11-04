import { RootState } from "../../types/store-types";
import { GranulatesStoreDataType, GranulateItemType, GranulatesSettingsType } from "../../types/data-types";

// GRANULATES SELECTROS
export const getGranulatesStateSelector = (state: RootState): GranulatesStoreDataType => state.granulates.items;
export const getCurrentGranulatesSelector = (UNID: number) => (state: RootState): GranulateItemType => state.granulates.items[UNID];
export const getGranulatesSettings = (state: RootState): GranulatesSettingsType => state.granulates.granulatesSettings;
export const getGranulatesSettingsVorekWeight = (state: RootState): number => state.granulates.granulatesSettings.basicVorekWeight;
export const getGranulatesSettingsContainerWeight = (state: RootState): number => state.granulates.granulatesSettings.basicContainerWeight;
