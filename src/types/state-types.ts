import type {
  IPigmentsSettingsType,
  IAdaptedDataType,
  IGumsSettingsType,
} from "./data-types";

export interface IPigmentsStateType {
  items: IAdaptedDataType,
  pigmentsSettings: IPigmentsSettingsType
};

export interface IGumsStateType {
  items: IAdaptedDataType,
  gumsSettings: IGumsSettingsType,
};

export interface IChemistryStateType {
  items: IAdaptedDataType,
};
