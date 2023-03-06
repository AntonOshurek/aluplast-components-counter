//abstract classes
import AbstractDataApi from "./abstract-data-api";
import AbstractStorage from "../storage-api/abstract-storage";
//types
import type { IGranulatesSettingsType, IDataType,} from "../../types/data-types";
//api
import granulatesStorageApi from "../storage-api/granulates-storage-api";
//data
import { basicGranulatesData, basicGranulatesSettings } from "../../data/granulates-data";

class GranulatesDataApi extends AbstractDataApi {
  #basicSettings: IGranulatesSettingsType;

  constructor(data: IDataType, settings: IGranulatesSettingsType, storageApi: AbstractStorage) {
    super(data, storageApi);
    this.#basicSettings = settings;
  };

  getDefaultSettings(): IGranulatesSettingsType {
    return this.#basicSettings;
  };

  getSettingsFromStorage(): IGranulatesSettingsType | null {
    return granulatesStorageApi.getSettings();
  };

  getSettings(): IGranulatesSettingsType {
    const resultFromStorage: IGranulatesSettingsType | null = this.getSettingsFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultSettings();
    }
  };
};

const granulatesDataApi = new GranulatesDataApi(basicGranulatesData, basicGranulatesSettings, granulatesStorageApi);

export default granulatesDataApi;
