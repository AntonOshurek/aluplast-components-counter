import { GranulatesDataType } from "../types/data-types";

class AbstractStorage {

  #name: string;

  constructor(name: string) {
    if(new.target === AbstractStorage) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    }

    this.#name = name;
  }

  getItems() {
    const jsonData = localStorage.getItem(this.#name);

    if(jsonData) {
      return JSON.parse(jsonData);
    } else {
      console.log('Данные в хранилище не обнаружены!');
      return null;
    }
  }

  setItems(items: GranulatesDataType) {
    this.clearStore();
    localStorage.setItem(this.#name, JSON.stringify(items));
  }

  clearStore() {
    localStorage.removeItem(this.#name);
  }
}

export default AbstractStorage;
