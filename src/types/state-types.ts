import { GranulateItemType } from "./data-types"

export interface CounterState {
  [granulateName: number]: GranulateItemType,
}
