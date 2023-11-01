//abstract classes
import AbstractStorage from "../abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../../variables/variables";

class ChemistryVeneerStorageApi extends AbstractStorage  {
  constructor({ name }: { name: ApplicationStorageApiNames.CHEMISTRY_VENEER_STORAGE; }) {
    super(name);
  };
};

const chemistryVeneerStorageApi = new ChemistryVeneerStorageApi({ name: ApplicationStorageApiNames.CHEMISTRY_VENEER_STORAGE });

export default chemistryVeneerStorageApi;
