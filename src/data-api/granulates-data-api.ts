import { GranulatesDataType, GranulateItemType, GranulatesStoreDataType, GranulatesSettingsType } from "../types/data-types";
import granulatesStorage from '../storage-api/granulates-storage';
import { granulatesData, basicGranulatesSettings } from "../data/granulates-data";

class GranulatesDataApi {
  #data: GranulatesDataType;
  #settings: GranulatesSettingsType;
  #defaultData: GranulatesStoreDataType;

  constructor(data: GranulatesDataType, settings: GranulatesSettingsType) {
    this.#data = data;
    this.#settings = settings;
    this.#defaultData = {};
    this.init();
  }

  getDefaultData(): GranulatesStoreDataType {
    return this.#defaultData;
  }

  getDataFromStorage(): GranulatesStoreDataType {
    return granulatesStorage.getItems();
  }

  getSettings(): GranulatesSettingsType {
    return this.#settings;
  }

  getData(): GranulatesStoreDataType {
    const resultFromStorage = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  }

  init() {
    this.#data.map((item: GranulateItemType) => {
      this.#defaultData[item.UNID] = item;
    });

    console.log(this.#defaultData);
  }
}

const granulatesDataApi = new GranulatesDataApi(granulatesData, basicGranulatesSettings);

export default granulatesDataApi;
