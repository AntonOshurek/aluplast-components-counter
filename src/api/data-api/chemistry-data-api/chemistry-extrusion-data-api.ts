//abstract classes
import AbstractDataApi from "../abstract-data-api";
import AbstractStorage from "../../storage-api/abstract-storage";
//api
import chemistryExtrusionStorageApi from '../../storage-api/chemistry-storage-api/chemistry-extrusion-storage-api';
//data
import { basicChemistryExtrusionData } from "../../../data/";
//types
import type { IDataType } from "../../../types/data-types";

class ChemistryExtrusionDataApi extends AbstractDataApi {

  constructor({ data, storageApi }: { data: IDataType; storageApi: AbstractStorage; }) {
    super(data, storageApi);
  };
};

const chemistryExtrusionDataApi = new ChemistryExtrusionDataApi({ data: basicChemistryExtrusionData, storageApi: chemistryExtrusionStorageApi });

export default chemistryExtrusionDataApi;
