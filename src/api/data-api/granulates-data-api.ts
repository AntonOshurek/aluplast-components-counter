//types
import type { BasicGranulatesDataType, IGranulateItemType, IGranulatesDataType, IGranulatesSettingsType } from "../../types/data-types";
//storage
import granulatesStorageApi from '../storage-api/granulates-storage-api';
//data
import { basicGranulatesData, basicGranulatesSettings } from "../../data/granulates-data";

class GranulatesDataApi {
  #basicData: BasicGranulatesDataType;
  #settings: IGranulatesSettingsType;
  #defaultData: IGranulatesDataType;

  constructor(data: BasicGranulatesDataType, settings: IGranulatesSettingsType) {
    this.#basicData = data;
    this.#settings = settings;
    this.#defaultData = {};
    this.init();
  }

  getDefaultData(): IGranulatesDataType {
    return this.#defaultData;
  }

  getDataFromStorage(): IGranulatesDataType | null {
    return granulatesStorageApi.getItems();
  }

  getSettings(): IGranulatesSettingsType {
    return this.#settings;
  }

  getData(): IGranulatesDataType {
    const resultFromStorage: IGranulatesDataType | null = this.getDataFromStorage();

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
