//data
import { chemistryExtrusionDataApi } from '../../../api/';
//types
import { IChemistryStateType } from "../../../types/state-types";

export const chemistryExtrusionState: IChemistryStateType = {
  items: chemistryExtrusionDataApi.getData(),
};
