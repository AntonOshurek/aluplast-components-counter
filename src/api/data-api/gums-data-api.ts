//abstract classes
import AbstractDataApi from "./abstract-data-api";
import AbstractStorage from "../storage-api/abstract-storage";
//api
import gumsStorageApi from "../storage-api/gums-storage-api";
//data
import { basicGumsData } from "../../data/gums-data";
//types
import type { IDataType } from "../../types/data-types";

class GumsDataApi extends AbstractDataApi {
  constructor(data: IDataType, storageApi: AbstractStorage) {
    super(data, storageApi);
  };
};

const gumsDataApi = new GumsDataApi(basicGumsData, gumsStorageApi);

export default gumsDataApi;
