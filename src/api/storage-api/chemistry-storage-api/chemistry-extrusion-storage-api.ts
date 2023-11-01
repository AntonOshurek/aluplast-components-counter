//abstract classes
import AbstractStorage from "../abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../../variables/variables";

class ChemistryExtrusionStorageApi extends AbstractStorage  {
  constructor({ name }: { name: ApplicationStorageApiNames.CHEMISTRY_EXTRUSION_STORAGE; }) {
    super(name);
  };
};

const chemistryExtrusionStorageApi = new ChemistryExtrusionStorageApi({ name: ApplicationStorageApiNames.CHEMISTRY_EXTRUSION_STORAGE });

export default chemistryExtrusionStorageApi;
