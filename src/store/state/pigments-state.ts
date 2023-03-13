//types
import type { IPigmentsStateType } from "../../types/state-types";
//data
import { pigmentsDataApi } from "../../api";

export const pigmentsState: IPigmentsStateType = {
  items: pigmentsDataApi.getData(),
  pigmentsSettings: pigmentsDataApi.getSettings(),
};
