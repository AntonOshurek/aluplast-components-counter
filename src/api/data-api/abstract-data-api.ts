//abstract classes
import AbstractStorage from "../storage-api/abstract-storage";
//types
import type { IAdaptedDataType, IDataType, IItemDataType } from "../../types/data-types";

abstract class AbstractDataApi {
  #basicData: IDataType;
  #defaultData: IAdaptedDataType;
  storageApi: AbstractStorage

  constructor(data: IDataType, storageApi: AbstractStorage) {
    if(new.target === AbstractDataApi) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    };

    this.#basicData = data;
    this.#defaultData = {};
    this.storageApi = storageApi;
    this.init();
  };

  getDefaultData(): IAdaptedDataType {
    return this.#defaultData;
  };

  getDataFromStorage(): IAdaptedDataType | null {
    return this.storageApi.getItems();
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

  init() {
    this.#basicData.map((item: IItemDataType) => {
      this.#defaultData[item.UNID] = item;
    });
  };
};

export default AbstractDataApi;
