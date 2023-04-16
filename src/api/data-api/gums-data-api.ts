//abstract classes
import AbstractDataApi from "./abstract-data-api";
import AbstractStorage from "../storage-api/abstract-storage";
//api
import gumsStorageApi from "../storage-api/gums-storage-api";
//data
import { basicGumsData, basicGumsSettings } from "../../data/";
//types
import type { IDataType, IGumsSettingsType } from "../../types/data-types";

class GumsDataApi extends AbstractDataApi {
  #basicSettings: IGumsSettingsType;

  constructor(data: IDataType, settings: IGumsSettingsType, storageApi: AbstractStorage) {
    super(data, storageApi);
    this.#basicSettings = settings;
  };

  getDefaultSettings(): IGumsSettingsType {
    return this.#basicSettings;
  };

  getSettingsFromStorage(): IGumsSettingsType | null {
    return gumsStorageApi.getSettings();
  };

  getSettings(): IGumsSettingsType {
    const resultFromStorage: IGumsSettingsType | null = this.getSettingsFromStorage();

    if (resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultSettings();
    };
  };
};

const gumsDataApi = new GumsDataApi(basicGumsData, basicGumsSettings, gumsStorageApi);

export default gumsDataApi;
