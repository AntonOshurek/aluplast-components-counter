import type { logNamesType } from "./variables-types";

import { AppThunk } from "./store-types";

import { clearItemAction as pigmentsClearItemAction } from "../store/slices/pigments-slice";
import { clearItemAction as clearItemActionGums } from "../store/slices/gums-slice";

export interface IIncDecActionParametrsType {
  UNID: string,
  value: number,
};

export interface ILogActionType {
  UNID: string,
  logName: logNamesType,
  logValue: string,
};

export type IncrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
export type DecrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
export type LogActionType = (action: ILogActionType) => AppThunk;

export type ClearItemActionType = typeof pigmentsClearItemAction | typeof clearItemActionGums;
