import { granulatesData, basicGranulatesSettings } from "../../data/granulates-data";

import { GranulatesState } from "../../types/state-types";
import { GranulateItemType } from "../../types/data-types";

export const granulatesState: GranulatesState = {
  items: {},
  granulatesSettings: basicGranulatesSettings,
};

const storageData = localStorage.getItem('granulates');

if(storageData) {
  granulatesState.items = JSON.parse(storageData);
} else {
  granulatesData.map((item: GranulateItemType) => {
    granulatesState.items[item.UNID] = {...item, amount: 0};
  });
};


