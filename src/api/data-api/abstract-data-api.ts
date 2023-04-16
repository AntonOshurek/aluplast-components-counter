//abstract classes
import AbstractStorage from "../storage-api/abstract-storage";
//adapters
import { dataAdapter } from '../../adapters/data-adapter';
//types
import type { IAdaptedDataType, IDataType, IItemDataType } from "../../types/data-types";

abstract class AbstractDataApi {
  #basicData: IDataType;
  #adaptedData: IAdaptedDataType;
  storageApi: AbstractStorage;

  constructor(data: IDataType, storageApi: AbstractStorage,) {
    if (new.target === AbstractDataApi) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    };

    this.#basicData = data;
    this.#adaptedData = {};
    this.storageApi = storageApi;
    this.init();
  };

  getAdaptedData(): IAdaptedDataType {
    return this.#adaptedData;
  };

  getDataFromStorage(): IAdaptedDataType | null {
    return this.storageApi.getItems();
  };

  getDataItem(id: string): IItemDataType {
    return this.#adaptedData[id];
  };

  getData(): IAdaptedDataType {
    const resultFromStorage: IAdaptedDataType | null = this.getDataFromStorage();

    if (resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getAdaptedData();
    };
  };

  init() {
    this.#adaptedData = dataAdapter(this.#basicData);
  };
};

export default AbstractDataApi;
