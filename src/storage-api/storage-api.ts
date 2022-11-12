import { GranulatesDataType } from "../types/data-types";

class AbstractStorage {

  protected name: string;
  protected items: GranulatesDataType | null;

  constructor(name: string) {
    this.name = name;
    this.items = [];
  }

  getItems() {
    const jsonData = localStorage.getItem(this.name);

    if(jsonData) {
      this.items = JSON.parse(jsonData);
      return this.items;
    } else {
      throw new Error('Данные в хранилище не обнаружены!');
    }
  }

  setItems(items: GranulatesDataType) {
    //setItem(key, value)
    localStorage.setItem(this.name, JSON.stringify(items));
  }

  cleanStore() {
    //removeItem(key)
    localStorage.removeItem(this.name);
  }

}

export default AbstractStorage;
