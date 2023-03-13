//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";
//types
import type { IPigmentsSettingsType } from "../../types/data-types";

class PigmentsStorageApi extends AbstractStorage {

  constructor(name: ApplicationStorageApiNames.PIGMENTS_STORAGE) {
    super(name);
  };

  getSettings(): IPigmentsSettingsType | null {
    const jsonData: string | null = localStorage.getItem(`${this.name}--settings`);

    if(jsonData) {
      const parsedJsonData: IPigmentsSettingsType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    };
  };

  setSettings(settings: IPigmentsSettingsType) {
    localStorage.setItem(`${this.name}--settings`, JSON.stringify(settings));
  };
};

const pigmentsStorageApi = new PigmentsStorageApi(ApplicationStorageApiNames.PIGMENTS_STORAGE);

export default pigmentsStorageApi;
