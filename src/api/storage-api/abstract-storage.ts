//types
import type { IAdaptedDataType } from "../../types/data-types";
//variables and consts
import { ApplicationStorageApiNames } from "../../variables/variables";

abstract class AbstractStorage {
  name: ApplicationStorageApiNames;

  constructor(name: ApplicationStorageApiNames) {
    if(new.target === AbstractStorage) {
      throw new Error('can\'t instantiate AbstractStorage, only concrete one.');
    };

    this.name = name;
  };

  getItems(): IAdaptedDataType | null {
    const jsonData: string | null = localStorage.getItem(this.name);

    if(jsonData) {
      const parsedJsonData: IAdaptedDataType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    };
  };

  setItems(items: IAdaptedDataType) {
    localStorage.setItem(this.name, JSON.stringify(items));
  };

  // getSettings(): SettingsType | null {
  //   const jsonData: string | null = localStorage.getItem(`${this.name}--settings`);

  //   if(jsonData) {
  //     const parsedJsonData: SettingsType = JSON.parse(jsonData);
  //     return parsedJsonData;
  //   } else {
  //     return null;
  //   };
  // };

  // setSettings(settings: SettingsType) {
  //   localStorage.setItem(`${this.name}--settings`, JSON.stringify(settings));
  // };

  clearStore() {
    localStorage.removeItem(this.name);
  };
};

export default AbstractStorage;
