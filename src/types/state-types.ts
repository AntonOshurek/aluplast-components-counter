import { GranulateItemType, GranulatesSettingsType } from "./data-types"

export interface GranulatesState {
  items: {[granulateName: number]: GranulateItemType},
  granulatesSettings: GranulatesSettingsType
}
