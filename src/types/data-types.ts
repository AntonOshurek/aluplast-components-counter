export interface GranulateItemType {
  UNID: number,
  name: string,
}

export type GranulatesDataType = GranulateItemType[]

//for add new data types (guma and another)
export type OverviewComponentDataType = GranulatesDataType;
export type ThingItemComponentDataType = GranulateItemType;
