import { GranulatesLogsNames, GumsLogsNames } from "../variables/variables";
import { AppThunk } from "./store-types";

export interface IIncDecActionParametrsType {
  UNID: number,
  value: number,
};

export interface ILogActionType {
  UNID: number,
  logName: GranulatesLogsNames | GumsLogsNames,
  logValue: string,
};

export type IncrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
export type DecrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
export type LogActionType = (action: ILogActionType) => AppThunk;
