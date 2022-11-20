//types
// import type { BasicGranulatesDataType, IGranulateItemType, IGranulatesDataType, IGranulatesSettingsType } from "../../types/data-types";
import { DataTypes, BasicDataTypes, SettingsTypes, ItemsTypes } from "../../types/data-types";
//storage
import { granulatesStorageApi } from '../';

import { adaptDataForClient } from '../../data-adapter/data-adapter';

abstract class AbstractData {
  #basicData: BasicDataTypes;
  #basicSettings: SettingsTypes;
  #defaultData: DataTypes;

  constructor(data: BasicDataTypes, settings: SettingsTypes) {
    if(new.target === AbstractData) {
      throw new Error('can\'t instantiate AbstractData, only concrete one.');
    }

    this.#basicData = data;
    this.#basicSettings = settings;
    this.#defaultData = {};
    this.init();
  }

  getDefaultData(): DataTypes {
    return this.#defaultData;
  }

  getDefaultSettings(): SettingsTypes {
    return this.#basicSettings;
  }

  getDataFromStorage(): DataTypes | null {
    return granulatesStorageApi.getItems();
  }

  getSettingsFromStorage(): SettingsTypes | null {
    return granulatesStorageApi.getSettings();
  }

  getDefaultItem(id: number): ItemsTypes {
    return this.#defaultData[id];
  }

  getData(): DataTypes {
    const resultFromStorage: DataTypes | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  }

  getSettings(): SettingsTypes {
    const resultFromStorage: SettingsTypes | null = this.getSettingsFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultSettings();
    }
  }

  init() {
    this.#defaultData = adaptDataForClient(this.#basicData);
  }
}

export default AbstractData;
