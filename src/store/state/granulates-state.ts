//types
import { IGranulatesState } from "../../types/state-types";
//data
import granulatesDataApi from "../../data-api/granulates-data-api";

const granulatesState: IGranulatesState = {
  items: granulatesDataApi.getData(),
  granulatesSettings: granulatesDataApi.getSettings(),
};

export { granulatesState };
