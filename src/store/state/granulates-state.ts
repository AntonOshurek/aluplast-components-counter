//types
import { GranulatesState } from "../../types/state-types";
//data
import granulatesDataApi from "../../data-api/granulates-data-api";


const granulatesState: GranulatesState = {
  items: granulatesDataApi.getData(),
  granulatesSettings: granulatesDataApi.getSettings(),
};

export { granulatesState };
