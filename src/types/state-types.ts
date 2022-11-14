import { GranulatesSettingsType, GranulatesStoreDataType } from "./data-types"

export interface IGranulatesState {
  items: GranulatesStoreDataType,
  granulatesSettings: GranulatesSettingsType
}
