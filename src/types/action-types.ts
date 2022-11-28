import { GranulatesLogsNames } from "../variables/variables";

export interface IIncDecActionParametrsType {
  UNID: number,
  value: number,
  logName: GranulatesLogsNames,
  logValue?: number,
}
