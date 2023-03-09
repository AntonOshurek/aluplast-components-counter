import type { IGranulatesSettingsType, IAdaptedDataType, IGumsSettingsType } from "./data-types";

export interface IGranulatesStateType {
  items: IAdaptedDataType,
  granulatesSettings: IGranulatesSettingsType
};

export interface IGumsStateType {
  items: IAdaptedDataType,
  gumsSettings: IGumsSettingsType,
};
