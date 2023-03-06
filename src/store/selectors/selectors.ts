//types
import type { RootState } from "../../types/store-types";
import type { IGranulatesDataType, IGranulateItemType, IGranulatesSettingsType, IGumsDataType } from "../../types/data-types";

// GRANULATES SELECTROS
export const SelectorGetGranulatesState = (state: RootState): IGranulatesDataType => state.granulates.items;
export const SelectorGetCurrentGranulates = (UNID: number) => (state: RootState): IGranulateItemType => state.granulates.items[UNID];
export const SelectorGetGranulatesSettings = (state: RootState): IGranulatesSettingsType => state.granulates.granulatesSettings;
export const SelectorGetGranulatesSettingsVorekWeight = (state: RootState): number => state.granulates.granulatesSettings.basicVorekWeight;
export const SelectorGetGranulatesSettingsContainerWeight = (state: RootState): number => state.granulates.granulatesSettings.basicContainerWeight;

// GUMS SELECTORS
export const SelectorGetGumsState = (state: RootState): IGumsDataType => state.gums.items;
