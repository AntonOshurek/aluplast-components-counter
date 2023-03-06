//variables ans consts
import { ApplicationStorageApiNames } from "../../variables/variables";
//types
import { IGumsDataType } from "../../types/data-types";

class GumsStorageApi  {
  #name: ApplicationStorageApiNames;

  constructor(name: ApplicationStorageApiNames.GUMS_STORAGE) {
    this.#name = name;
  };

  getItems(): IGumsDataType | null {
    const jsonData: string | null = localStorage.getItem(this.#name);

    if(jsonData) {
      const parsedJsonData: IGumsDataType = JSON.parse(jsonData);
      return parsedJsonData;
    } else {
      return null;
    }
  };

  setItems(items: IGumsDataType) {
    localStorage.setItem(this.#name, JSON.stringify(items));
  };


  clearStore() {
    localStorage.removeItem(this.#name);
  };
};

const gumsStorageApi = new GumsStorageApi(ApplicationStorageApiNames.GUMS_STORAGE);

export default gumsStorageApi;
