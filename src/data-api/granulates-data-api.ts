import { BasicGranulatesDataType, IGranulateItemType, GranulatesDataType, IGranulatesSettingsType } from "../types/data-types";
import granulatesStorage from '../storage-api/granulates-storage';
import { basicGranulatesData, basicGranulatesSettings } from "../data/granulates-data";

class GranulatesDataApi {
  #basicData: BasicGranulatesDataType;
  #settings: IGranulatesSettingsType;
  #defaultData: GranulatesDataType;

  constructor(data: BasicGranulatesDataType, settings: IGranulatesSettingsType) {
    this.#basicData = data;
    this.#settings = settings;
    this.#defaultData = {};
    this.init();
  }

  getDefaultData(): GranulatesDataType {
    return this.#defaultData;
  }

  getDataFromStorage(): GranulatesDataType {
    return granulatesStorage.getItems();
  }

  getSettings(): IGranulatesSettingsType {
    return this.#settings;
  }

  getData(): GranulatesDataType {
    const resultFromStorage = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  }

  init() {
    this.#basicData.map((item: IGranulateItemType) => {
      this.#defaultData[item.UNID] = item;
    });
  }
}

const granulatesDataApi = new GranulatesDataApi(basicGranulatesData, basicGranulatesSettings);

export default granulatesDataApi;
