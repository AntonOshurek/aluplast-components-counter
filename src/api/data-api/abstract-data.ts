//types
// import type { BasicGranulatesDataType, IGranulateItemType, IGranulatesDataType, IGranulatesSettingsType } from "../../types/data-types";
import { DataTypes, BasicDataTypes, SettingsTypes } from "../../types/data-types";
//storage
import { granulatesStorageApi } from '../';

import { adaptDataForClient } from '../../data-adapter/data-adapter';

abstract class AbstractData {
  #basicData: BasicDataTypes;
  #settings: SettingsTypes;
  #defaultData: DataTypes;

  constructor(data: BasicDataTypes, settings: SettingsTypes) {
    if(new.target === AbstractData) {
      throw new Error('can\'t instantiate AbstractData, only concrete one.');
    }

    this.#basicData = data;
    this.#settings = settings;
    this.#defaultData = {};
    this.init();
  }

  getDefaultData(): DataTypes {
    return this.#defaultData;
  }

  getDataFromStorage(): DataTypes | null {
    return granulatesStorageApi.getItems();
  }

  getSettings(): SettingsTypes {
    return this.#settings;
  }

  getData(): DataTypes {
    const resultFromStorage: DataTypes | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  }

  init() {
    this.#defaultData = adaptDataForClient(this.#basicData);
  }
}

export default AbstractData;
