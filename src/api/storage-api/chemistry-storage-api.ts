//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";

class ChemistryStorageApi extends AbstractStorage  {
  constructor(name: ApplicationStorageApiNames.CHEMISTRY_STORAGE) {
    super(name);
  };
};

const chemistryStorageApi = new ChemistryStorageApi(ApplicationStorageApiNames.CHEMISTRY_STORAGE);

export default chemistryStorageApi;
