import type { IGranulatesSettingsType, IAdaptedDataType } from "./data-types";

export interface IGranulatesStateType {
  items: IAdaptedDataType,
  granulatesSettings: IGranulatesSettingsType
};

export interface IGumsStateType {
  items: IAdaptedDataType,
};
