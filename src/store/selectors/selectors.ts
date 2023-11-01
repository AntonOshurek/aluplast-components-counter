//types
import type { RootState } from "../../types/store-types";
import type { IPigmentsSettingsType, IGumsSettingsType, IAdaptedDataType, IItemDataType } from "../../types/data-types";

// PIGMENTS SELECTROS
export const SelectorGetPigmentsState = (state: RootState): IAdaptedDataType => state.pigments.items;
export const SelectorGetCurrentPigments = (UNID: string) => (state: RootState): IItemDataType => state.pigments.items[UNID];
export const SelectorGetPigmentsSettings = (state: RootState): IPigmentsSettingsType => state.pigments.pigmentsSettings;
export const SelectorGetPigmentsSettingsVorekWeight = (state: RootState): number => state.pigments.pigmentsSettings.basicVorekWeight;
export const SelectorGetPigmentsSettingsContainerWeight = (state: RootState): number => state.pigments.pigmentsSettings.basicContainerWeight;

// GUMS SELECTORS
export const SelectorGetGumsState = (state: RootState): IAdaptedDataType => state.gums.items;
export const SelectorGetCurrentGum = (UNID: string) => (state: RootState): IItemDataType => state.gums.items[UNID];
export const SelectorGetGumsSettings = (state: RootState): IGumsSettingsType => state.gums.gumsSettings;
export const SelectorGetGumsSettingsCardboardWeight = (state: RootState): number => state.gums.gumsSettings.basicCardboardWeight;

// CHEMISTRY SELECTORS
export const SelectorGetChemistryState = (state: RootState): IAdaptedDataType => state.chemistry.items;
export const SelectorGetCurrentChemistry = (UNID: string) => (state: RootState): IItemDataType => state.chemistry.items[UNID];

export const SelectorGetChemistryExtrusionState = (state: RootState): IAdaptedDataType => state.chemistryExtrusion.items;
export const SelectorGetCurrentChemistryExtrusionItem = (UNID: string) => (state: RootState): IItemDataType => state.chemistryExtrusion.items[UNID];

export const SelectorGetChemistryVeneerState = (state: RootState): IAdaptedDataType => state.chemistryVeneer.items;
export const SelectorGetCurrentChemistryVeneerItem = (UNID: string) => (state: RootState): IItemDataType => state.chemistryVeneer.items[UNID];
