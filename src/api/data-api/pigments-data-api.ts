//abstract classes
import AbstractDataApi from "./abstract-data-api";
import AbstractStorage from "../storage-api/abstract-storage";
//types
import type { IPigmentsSettingsType, IDataType,} from "../../types/data-types";
//api
import pigmentsStorageApi from "../storage-api/pigments-storage-api";
//data
import { basicPigmentsData, basicPigmentsSettings } from "../../data/pigments-data";

class PigmentsDataApi extends AbstractDataApi {
  #basicSettings: IPigmentsSettingsType;

  constructor(data: IDataType, settings: IPigmentsSettingsType, storageApi: AbstractStorage) {
    super(data, storageApi, settings);
    this.#basicSettings = settings;
  };

  getDefaultSettings(): IPigmentsSettingsType {
    return this.#basicSettings;
  };

  getSettingsFromStorage(): IPigmentsSettingsType | null {
    return pigmentsStorageApi.getSettings();
  };

  getSettings(): IPigmentsSettingsType {
    const resultFromStorage: IPigmentsSettingsType | null = this.getSettingsFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultSettings();
    }
  };
};

const pigmentsDataApi = new PigmentsDataApi(basicPigmentsData, basicPigmentsSettings, pigmentsStorageApi);

export default pigmentsDataApi;
