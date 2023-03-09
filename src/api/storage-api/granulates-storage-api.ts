//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";
//types
import type { IGranulatesSettingsType } from "../../types/data-types";

class GranulatesStorageApi extends AbstractStorage {

  constructor(name: ApplicationStorageApiNames.GRANULATES_STORAGE) {
    super(name);
  };

  getSettings(): IGranulatesSettingsType | null {
    const jsonData: string | null = localStorage.getItem(`${this.name}--settings`);

    if(jsonData) {
      const parsedJsonData: IGranulatesSettingsType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    };
  };

  setSettings(settings: IGranulatesSettingsType) {
    localStorage.setItem(`${this.name}--settings`, JSON.stringify(settings));
  };
};

const granulatesStorageApi = new GranulatesStorageApi(ApplicationStorageApiNames.GRANULATES_STORAGE);

export default granulatesStorageApi;
