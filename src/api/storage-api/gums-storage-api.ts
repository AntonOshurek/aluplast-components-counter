//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";
//types
import type { IGumsSettingsType } from "../../types/data-types";

class GumsStorageApi extends AbstractStorage  {
  constructor(name: ApplicationStorageApiNames.GUMS_STORAGE) {
    super(name);
  };

  getSettings(): IGumsSettingsType | null {
    const jsonData: string | null = localStorage.getItem(`${this.name}--settings`);

    if(jsonData) {
      const parsedJsonData: IGumsSettingsType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    };
  };

  setSettings(settings: IGumsSettingsType) {
    localStorage.setItem(`${this.name}--settings`, JSON.stringify(settings));
  };
};

const gumsStorageApi = new GumsStorageApi(ApplicationStorageApiNames.GUMS_STORAGE);

export default gumsStorageApi;
