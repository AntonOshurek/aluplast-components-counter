import { IGranulatesSettingsType, GranulatesDataType } from "./data-types"

export interface IGranulatesState {
  items: GranulatesDataType,
  granulatesSettings: IGranulatesSettingsType
}
