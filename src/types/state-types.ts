import type { IGranulatesSettingsType, IGranulatesDataType, IGumsDataType } from "./data-types";

export interface IGranulatesStateType {
  items: IGranulatesDataType,
  granulatesSettings: IGranulatesSettingsType
};

export interface IGumsStateType {
  items: IGumsDataType,
};
