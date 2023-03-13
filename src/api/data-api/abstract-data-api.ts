//abstract classes
import AbstractStorage from "../storage-api/abstract-storage";
//types
import type { IAdaptedDataType, IDataType, IItemDataType, SettingsType } from "../../types/data-types";

abstract class AbstractDataApi {
  #basicData: IDataType;
  #adaptedData: IAdaptedDataType;
  storageApi: AbstractStorage;
  #basicSettings: SettingsType;

  constructor(data: IDataType, storageApi: AbstractStorage, settings: SettingsType) {
    if(new.target === AbstractDataApi) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    };

    this.#basicData = data;
    this.#adaptedData = {};
    this.storageApi = storageApi;
    this.#basicSettings = settings;
    this.init();
  };

  getAdaptedData(): IAdaptedDataType {
    return this.#adaptedData;
  };

  getDataFromStorage(): IAdaptedDataType | null {
    return this.storageApi.getItems();
  };

  getDataItem(id: number): IItemDataType {
    return this.#adaptedData[id];
  };

  getData(): IAdaptedDataType {
    const resultFromStorage: IAdaptedDataType | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getAdaptedData();
    };
  };

  // getDefaultSettings(): SettingsType {
  //   return this.#basicSettings;
  // };

  // getSettingsFromStorage(): SettingsType | null {
  //   return this.storageApi.getSettings();
  // };

  // getSettings(): SettingsType {
  //   const resultFromStorage: SettingsType | null = this.getSettingsFromStorage();

  //   if(resultFromStorage) {
  //     return resultFromStorage;
  //   } else {
  //     return this.getDefaultSettings();
  //   };
  // };

  init() {
    this.#basicData.map((item: IItemDataType) => {
      this.#adaptedData[item.UNID] = item;
    });
  };
};

export default AbstractDataApi;
