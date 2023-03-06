//types
import type { DataTypes, IGranulatesSettingsType, SettingsTypes, IGranulatesDataType } from "../../types/data-types";
//variables and consts
import { ApplicationStorageApiNames } from "../../variables/variables";

abstract class AbstractStorage {

  #name: ApplicationStorageApiNames;

  constructor(name: ApplicationStorageApiNames) {
    if(new.target === AbstractStorage) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    }

    this.#name = name;
  }

  getItems(): IGranulatesDataType | null {
    const jsonData: string | null = localStorage.getItem(this.#name);

    if(jsonData) {
      const parsedJsonData: IGranulatesDataType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  }

  getSettings(): IGranulatesSettingsType | null {
    const jsonData: string | null = localStorage.getItem(`${this.#name}--settings`);

    if(jsonData) {
      const parsedJsonData: IGranulatesSettingsType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  }

  setItems(items: IGranulatesDataType) {
    localStorage.setItem(this.#name, JSON.stringify(items));
  }

  setSettings(settings: IGranulatesSettingsType) {
    localStorage.setItem(`${this.#name}--settings`, JSON.stringify(settings));
  }

  clearStore() {
    localStorage.removeItem(this.#name);
  }
}

export default AbstractStorage;
