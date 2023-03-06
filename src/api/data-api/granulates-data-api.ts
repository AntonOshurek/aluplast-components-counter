//types
import type {
  IGranulatesSettingsType,
  IDataType,
  IAdaptedDataType,
  IItemDataType,
} from "../../types/data-types";
//data
import { basicGranulatesData, basicGranulatesSettings } from "../../data/granulates-data";
import granulatesStorageApi from "../storage-api/granulates-storage-api";

class GranulatesDataApi {
  #basicData: IDataType;
  #basicSettings: IGranulatesSettingsType;
  #defaultData: IAdaptedDataType;

  constructor(data: IDataType, settings: IGranulatesSettingsType) {
    this.#basicData = data;
    this.#basicSettings = settings;
    this.#defaultData = {};
    this.init();
  };

  getDefaultData(): IAdaptedDataType {
    return this.#defaultData;
  };

  getDefaultSettings(): IGranulatesSettingsType {
    return this.#basicSettings;
  };

  getDataFromStorage(): IAdaptedDataType | null {
    return granulatesStorageApi.getItems();
  };

  getSettingsFromStorage(): IGranulatesSettingsType | null {
    return granulatesStorageApi.getSettings();
  };

  getDefaultItem(id: number): IItemDataType {
    return this.#defaultData[id];
  };

  getData(): IAdaptedDataType {
    const resultFromStorage: IAdaptedDataType | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  };

  getSettings(): IGranulatesSettingsType {
    const resultFromStorage: IGranulatesSettingsType | null = this.getSettingsFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultSettings();
    }
  };

  init() {
    // this.#defaultData = adaptDataForClient(this.#basicData);
    this.#basicData.map((item: IItemDataType) => {
      this.#defaultData[item.UNID] = item;
    });
  };
};

const granulatesDataApi = new GranulatesDataApi(basicGranulatesData, basicGranulatesSettings);

export default granulatesDataApi;
