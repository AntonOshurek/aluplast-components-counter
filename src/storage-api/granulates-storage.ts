import AbstractStorage from "./storage-api";

class GranulatesStorage extends AbstractStorage {

  constructor(name: string) {
    super(name);
  }
}

const granulatesStorage = new GranulatesStorage('granulates');

export default granulatesStorage;
