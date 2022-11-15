//types
import type { IGranulatesStateType } from "../../types/state-types";
//data
import { granulatesDataApi } from "../../api/";

export const granulatesState: IGranulatesStateType = {
  items: granulatesDataApi.getData(),
  granulatesSettings: granulatesDataApi.getSettings(),
};
