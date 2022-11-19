//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";

class GranulatesStorageApi extends AbstractStorage {

  constructor(name: ApplicationStorageApiNames.GRANULATES_STORAGE) {
    super(name);
  }
}

const granulatesStorageApi = new GranulatesStorageApi(ApplicationStorageApiNames.GRANULATES_STORAGE);

export default granulatesStorageApi;
