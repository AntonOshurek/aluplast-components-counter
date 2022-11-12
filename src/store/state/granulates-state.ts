import { granulatesData, basicGranulatesSettings } from "../../data/granulates-data";

import { GranulatesState } from "../../types/state-types";
import { GranulateItemType } from "../../types/data-types";

import granulatesStorage from "../../storage-api/granulates-storage";

export const granulatesState: GranulatesState = {
  items: {},
  granulatesSettings: basicGranulatesSettings,
};

const storageData = granulatesStorage.getItems();

if(storageData) {
  granulatesState.items = storageData;
} else {
  granulatesData.map((item: GranulateItemType) => {
    granulatesState.items[item.UNID] = {...item, amount: 0};
  });
};


