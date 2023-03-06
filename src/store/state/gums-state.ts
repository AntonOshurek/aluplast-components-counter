//data
import gumsDataApi from "../../api/data-api/gums-data-api";
//types
import type { IGumsStateType } from "../../types/state-types";

export const gumsState: IGumsStateType = {
  items: gumsDataApi.getData(),
};
