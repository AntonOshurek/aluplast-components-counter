//types
import type { IGranulatesDataType } from "../../types/data-types";
//variables and consts
import { GranulatesStorageApiNames } from "../../variables/variables";

abstract class AbstractStorage {

  #name: GranulatesStorageApiNames;

  constructor(name: GranulatesStorageApiNames) {
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

  setItems(items: IGranulatesDataType) {
    localStorage.setItem(this.#name, JSON.stringify(items));
  }

  clearStore() {
    localStorage.removeItem(this.#name);
  }
}

export default AbstractStorage;
