//api
import gumsStorageApi from "../storage-api/gums-storage-api";
//data
import { basicGumsData } from "../../data/gums-data";
//types
import type { IItemDataType, IDataType, IAdaptedDataType } from "../../types/data-types";

class GumsDataApi {
  #basicData: IDataType;
  #defaultData: IAdaptedDataType;

  constructor(data: IDataType) {
    this.#basicData = data;
    this.#defaultData = {};
    this.init();
  };

  getDefaultData(): IAdaptedDataType {
    return this.#defaultData;
  };

  getDataFromStorage(): IAdaptedDataType | null {
    return gumsStorageApi.getItems();
  };

  getData(): IAdaptedDataType {
    const resultFromStorage: IAdaptedDataType | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  };

  init() {
    this.#basicData.map((item: IItemDataType) => {
      this.#defaultData[item.UNID] = item;
    });
  };
};

const gumsDataApi = new GumsDataApi(basicGumsData);

export default gumsDataApi;
