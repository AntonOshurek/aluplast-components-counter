import { IGranulatesSettingsType, IGranulatesDataType } from "./data-types"

export interface IGranulatesState {
  items: IGranulatesDataType,
  granulatesSettings: IGranulatesSettingsType
}
