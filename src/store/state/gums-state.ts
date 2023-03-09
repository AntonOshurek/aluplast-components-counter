//data
import {gumsDataApi} from "../../api/";
//types
import type { IGumsStateType } from "../../types/state-types";

export const gumsState: IGumsStateType = {
  items: gumsDataApi.getData(),
  gumsSettings: gumsDataApi.getSettings(),
};
