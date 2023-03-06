//api
import gumsStorageApi from "../storage-api/gums-storage-api";
//data
import { basicGumsData } from "../../data/gums-data";
//types
import { BasicGumsDataType, IGumsDataType, IGumItemType } from "../../types/data-types";

class GumsDataApi {
  #basicData: BasicGumsDataType;
  #defaultData: IGumsDataType;

  constructor(data: BasicGumsDataType) {
    this.#basicData = data;
    this.#defaultData = {};
    this.init();
  };

  getDefaultData(): IGumsDataType {
    return this.#defaultData;
  };

  getDataFromStorage(): IGumsDataType | null {
    return gumsStorageApi.getItems();
  };

  getData(): IGumsDataType {
    const resultFromStorage: IGumsDataType | null = this.getDataFromStorage();

    if(resultFromStorage) {
      return resultFromStorage;
    } else {
      return this.getDefaultData();
    }
  };

  init() {
    this.#basicData.map((item: IGumItemType) => {
      this.#defaultData[item.UNID] = item;
    });
  };
};

const gumsDataApi = new GumsDataApi(basicGumsData);

export default gumsDataApi;
