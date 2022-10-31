import { granulatesData } from "../../data/granulates-data";

import { CounterState } from "../../types/state-types";
import { GranulateItemType } from "../../types/data-types";

export const granulatesState: CounterState = {};

granulatesData.map((item: GranulateItemType) => {
  granulatesState[item.UNID] = {...item, amount: 0};
})

console.log(granulatesState)
