import { granulatesData, basicGranulatesSettings } from "../../data/granulates-data";

import { GranulatesState } from "../../types/state-types";
import { GranulateItemType } from "../../types/data-types";

export const granulatesState: GranulatesState = {
  items: {},
  granulatesSettings: basicGranulatesSettings,
};

granulatesData.map((item: GranulateItemType) => {
  granulatesState.items[item.UNID] = {...item, amount: 0};
})
