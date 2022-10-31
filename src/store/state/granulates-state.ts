import { granulatesData } from "../../data/granulates-data";

import { GranulatesState } from "../../types/state-types";
import { GranulateItemType } from "../../types/data-types";

export const granulatesState: GranulatesState = {};

granulatesData.map((item: GranulateItemType) => {
  granulatesState[item.UNID] = {...item, amount: 0};
})
