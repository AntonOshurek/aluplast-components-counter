//abstract classes
import AbstractStorage from "./abstract-storage";
//variables ans consts
import { GranulatesStorageApiNames } from "../../variables/variables";

class GranulatesStorageApi extends AbstractStorage {

  constructor(name: GranulatesStorageApiNames.GRANULATES_STORAGE) {
    super(name);
  }
}

const granulatesStorageApi = new GranulatesStorageApi(GranulatesStorageApiNames.GRANULATES_STORAGE);

export default granulatesStorageApi;
