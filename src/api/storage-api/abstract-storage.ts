//types
import type { DataTypes, SettingsTypes } from "../../types/data-types";
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

  getItems(): DataTypes | null {
    const jsonData: string | null = localStorage.getItem(this.#name);

    if(jsonData) {
      const parsedJsonData: DataTypes = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  }

  getSettings(): SettingsTypes | null {
    const jsonData: string | null = localStorage.getItem(`${this.#name}--settings`);

    if(jsonData) {
      const parsedJsonData: SettingsTypes = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  }

  setItems(items: DataTypes) {
    localStorage.setItem(this.#name, JSON.stringify(items));
  }

  setSettings(settings: SettingsTypes) {
    localStorage.setItem(`${this.#name}--settings`, JSON.stringify(settings));
  }

  clearStore() {
    localStorage.removeItem(this.#name);
  }
}

export default AbstractStorage;
