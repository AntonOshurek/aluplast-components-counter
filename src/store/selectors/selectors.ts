//types
import type { RootState } from "../../types/store-types";
import type { IGranulatesSettingsType, IGumsSettingsType, IAdaptedDataType, IItemDataType } from "../../types/data-types";
import { clearItemAction as clearItemActionGranulates } from "../slices/granulates-slice";
import { clearItemAction as clearItemActionGums} from "../slices/gums-slice";

// GRANULATES SELECTROS
export const SelectorGetGranulatesState = (state: RootState): IAdaptedDataType => state.granulates.items;
export const SelectorGetCurrentGranulates = (UNID: number) => (state: RootState): IItemDataType => state.granulates.items[UNID];
export const SelectorGetGranulatesSettings = (state: RootState): IGranulatesSettingsType => state.granulates.granulatesSettings;
export const SelectorGetGranulatesSettingsVorekWeight = (state: RootState): number => state.granulates.granulatesSettings.basicVorekWeight;
export const SelectorGetGranulatesSettingsContainerWeight = (state: RootState): number => state.granulates.granulatesSettings.basicContainerWeight;

// GUMS SELECTORS
export const SelectorGetGumsState = (state: RootState): IAdaptedDataType => state.gums.items;
export const SelectorGetCurrentGum = (UNID: number) => (state: RootState): IItemDataType => state.gums.items[UNID];
export const SelectorGetGumsSettings = (state: RootState): IGumsSettingsType => state.gums.gumsSettings;
export const SelectorGetGumsSettingsCardboardWeight = (state: RootState): number => state.gums.gumsSettings.basicCardboardWeight;

//this types used in counter-page component, for props actions.
export type GetItemSelector = typeof SelectorGetCurrentGum | typeof SelectorGetCurrentGranulates;
export type ClearItemSelector = typeof clearItemActionGranulates | typeof clearItemActionGums;
