import { GranulateItemType, GranulatesSettingsType } from "./data-types"

export interface GranulatesState {
  [granulateName: number]: GranulateItemType,
  granulatesSettings: GranulatesSettingsType
}
