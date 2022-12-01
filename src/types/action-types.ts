import { GranulatesLogsNames } from "../variables/variables";

export interface IIncDecActionParametrsType {
  UNID: number,
  value: number,
}

export interface ILogActionType {
  UNID: number,
  logName: GranulatesLogsNames,
  logValue: string,
}
