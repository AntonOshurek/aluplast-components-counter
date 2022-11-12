import { GranulatesSettingsType, GranulatesStoreDataType } from "./data-types"

export interface GranulatesState {
  items: GranulatesStoreDataType,
  granulatesSettings: GranulatesSettingsType
}
