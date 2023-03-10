import type { GranulatesSettingsNames, GumsSettingsNames } from "../variables/variables";

export interface IGranulatesSettingsType {
  [GranulatesSettingsNames.CONTAINER_WEIGHT]: number,
  [GranulatesSettingsNames.VOREK_WEIGHT]: number,
};

export interface IGumsSettingsType {
  [GumsSettingsNames.CARDBOARD_WEIGHT]: number,
};

export interface IItemDataType {
  UNID: number,
  amount: number,
  firm: string,
  name: string,
  itemNumber: string,
  description: string,
  image: string,
  color: string,
  logs: {
    [key: string]: string[],
  },
};

export type IDataType = IItemDataType[];

export interface IAdaptedDataType {
  [propertyName: number]: IItemDataType,
};
