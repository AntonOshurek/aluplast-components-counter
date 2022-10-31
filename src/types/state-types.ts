import { GranulateItemType } from "./data-types"

export interface GranulatesState {
  [granulateName: number]: GranulateItemType,
}
