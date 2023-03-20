//data
import { chemistryDataApi } from "../../api";
//types
import { IChemistryStateType } from "../../types/state-types";

export const chemistryState: IChemistryStateType = {
  items: chemistryDataApi.getData(),
};
