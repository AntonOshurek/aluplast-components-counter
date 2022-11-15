import { GranulatesSettingsNames } from "../variables/variables";

export interface IGranulateItemType {
  UNID: number,
  name: string,
  amount: number,
  image: string,
};

export type BasicGranulatesDataType = IGranulateItemType[];

export interface IGranulatesSettingsType {
  [GranulatesSettingsNames.CONTAINER_WEIGHT]: number,
  [GranulatesSettingsNames.VOREK_WEIGHT]: number,
};

export interface IGranulatesDataType {
  [propertyName: number]: IGranulateItemType,
};

//for add new data types (guma and another)
export type OverviewComponentDataType = IGranulatesDataType;
export type ThingItemComponentDataType = IGranulateItemType;
