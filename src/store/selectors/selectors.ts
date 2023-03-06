//types
import type { RootState } from "../../types/store-types";
import type { IGranulatesSettingsType, IAdaptedDataType, IItemDataType } from "../../types/data-types";

// GRANULATES SELECTROS
export const SelectorGetGranulatesState = (state: RootState): IAdaptedDataType => state.granulates.items;
export const SelectorGetCurrentGranulates = (UNID: number) => (state: RootState): IItemDataType => state.granulates.items[UNID];
export const SelectorGetGranulatesSettings = (state: RootState): IGranulatesSettingsType => state.granulates.granulatesSettings;
export const SelectorGetGranulatesSettingsVorekWeight = (state: RootState): number => state.granulates.granulatesSettings.basicVorekWeight;
export const SelectorGetGranulatesSettingsContainerWeight = (state: RootState): number => state.granulates.granulatesSettings.basicContainerWeight;

// GUMS SELECTORS
export const SelectorGetGumsState = (state: RootState): IAdaptedDataType => state.gums.items;
