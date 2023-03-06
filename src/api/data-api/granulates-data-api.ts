//types
import type {
  BasicGranulatesDataType,
  IGranulatesDataType,
  IGranulatesSettingsType,
  IGranulateItemType,
  SettingsTypes
} from "../../types/data-types";
//data
import { basicGranulatesData, basicGranulatesSettings } from "../../data/granulates-data";
import granulatesStorageApi from "../storage-api/granulates-storage-api";

class GranulatesDataApi {
  #basicData: BasicGranulatesDataType;
  #basicSettings: IGranulatesSettingsType;
  #defaultData: IGranulatesDataType;

  constructor(data: BasicGranulatesDataType, settings: IGranulatesSettingsType) {
    this.#basicData = data;
    this.#basicSettings = settings;
    this.#defaultData = {};
    this.init();
  };

  getDefaultData(): IGranulatesDataType {
    return this.#defaultData;
  };

  getDefaultSettings(): SettingsTypes {
    return this.#basicSettings;
  };

  getDataFromStorage(): IGranulatesDataType | null {
    return granulatesStorageApi.getItems();
  };

  getSettingsFromStorage(): SettingsTypes | null {
    return granulatesStorageApi.getSettings();
  };

  getDefaultItem(id: number): IGranulateItemType {
    return this.#defaultData[id];
  };

  getData(): IGranulatesDataType {
    const resultFromStorage: IGranulatesDataType | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  };

  getSettings(): SettingsTypes {
    const resultFromStorage: SettingsTypes | null = this.getSettingsFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultSettings();
    }
  };

  init() {
    // this.#defaultData = adaptDataForClient(this.#basicData);
    this.#basicData.map((item: IGranulateItemType) => {
      this.#defaultData[item.UNID] = item;
    });
  };
};

const granulatesDataApi = new GranulatesDataApi(basicGranulatesData, basicGranulatesSettings);

export default granulatesDataApi;
