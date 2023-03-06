//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";

class GumsStorageApi extends AbstractStorage  {
  constructor(name: ApplicationStorageApiNames.GUMS_STORAGE) {
    super(name);
  };
};

const gumsStorageApi = new GumsStorageApi(ApplicationStorageApiNames.GUMS_STORAGE);

export default gumsStorageApi;
