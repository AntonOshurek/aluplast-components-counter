import type { GranulatesSettingsNames } from "../variables/variables";
//Granulates Types
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

//universal types for abstract data API classes and overview component
//An abstract class with data must be able to accept any data.
//The overview should be able to work with all types of data. overview is a universal component.
export type DataTypes = IGranulatesDataType;
export type BasicDataTypes = BasicGranulatesDataType;
export type ItemsTypes = IGranulateItemType;
export type SettingsTypes = IGranulatesSettingsType;
