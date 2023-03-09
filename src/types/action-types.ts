import { GranulatesLogsNames, GumsLogsNames } from "../variables/variables";

export interface IIncDecActionParametrsType {
  UNID: number,
  value: number,
};

export interface ILogActionType {
  UNID: number,
  logName: GranulatesLogsNames | GumsLogsNames,
  logValue: string,
};
