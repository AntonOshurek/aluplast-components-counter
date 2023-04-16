//abstract classes
import AbstractDataApi from "./abstract-data-api";
import AbstractStorage from "../storage-api/abstract-storage";
//api
import chemistryStorageApi from "../storage-api/chemistry-storage-api";
//data
import { basicChemistryData } from "../../data/";
//types
import type { IDataType } from "../../types/data-types";

class ChemistryDataApi extends AbstractDataApi {

  constructor(data: IDataType, storageApi: AbstractStorage) {
    super(data, storageApi);
  };
};

const chemistryDataApi = new ChemistryDataApi(basicChemistryData, chemistryStorageApi);

export default chemistryDataApi;
