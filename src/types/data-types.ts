import { GranulatesSettingsNames } from "../variables/variables";

export interface GranulateItemType {
  UNID: number,
  name: string,
  amount: number,
  image: string,
}
export type GranulatesDataType = GranulateItemType[]

export interface GranulatesSettingsType {
  [GranulatesSettingsNames.CONTAINER_WEIGHT]: number,
  [GranulatesSettingsNames.VOREK_WEIGHT]: number,
}

export type GranulatesStoreDataType = {[propertyName: number]: GranulateItemType}

//for add new data types (guma and another)
export type OverviewComponentDataType = GranulatesStoreDataType;
export type ThingItemComponentDataType = GranulateItemType;


