//abstract classes
import AbstractDataApi from "../abstract-data-api";
import AbstractStorage from "../../storage-api/abstract-storage";
//api
import chemistryVeneerStorageApi from '../../storage-api/chemistry-storage-api/chemistry-veneer-storage-api';
//data
import { basicChemistryVeneerData } from "../../../data/";
//types
import type { IDataType } from "../../../types/data-types";

class ChemistryVeneerDataApi extends AbstractDataApi {

  constructor({ data, storageApi }: { data: IDataType; storageApi: AbstractStorage; }) {
    super(data, storageApi);
  };
};

const chemistryVeneerDataApi = new ChemistryVeneerDataApi({ data: basicChemistryVeneerData, storageApi: chemistryVeneerStorageApi });

export default chemistryVeneerDataApi;
