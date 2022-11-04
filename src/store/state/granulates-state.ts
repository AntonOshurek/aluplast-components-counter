import { granulatesData } from "../../data/granulates-data";

import { GranulatesState } from "../../types/state-types";
import { GranulateItemType, GranulatesSettingsType } from "../../types/data-types";

const basicGranulatesSettings: GranulatesSettingsType = {
  basicVorekWeight: 25,
  basicContainerWeight: 77,
}

export const granulatesState: GranulatesState = {
  items: {},
  granulatesSettings: basicGranulatesSettings,
};

granulatesData.map((item: GranulateItemType) => {
  granulatesState.items[item.UNID] = {...item, amount: 0};
})
