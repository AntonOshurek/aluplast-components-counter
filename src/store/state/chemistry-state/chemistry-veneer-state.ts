//data
import { chemistryVeneerDataApi } from '../../../api/';
//types
import { IChemistryStateType } from "../../../types/state-types";

export const chemistryVeneerState: IChemistryStateType = {
  items: chemistryVeneerDataApi.getData(),
};
