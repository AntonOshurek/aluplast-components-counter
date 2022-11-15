import type { IGranulatesSettingsType, IGranulatesDataType } from "./data-types";

export interface IGranulatesStateType {
  items: IGranulatesDataType,
  granulatesSettings: IGranulatesSettingsType
}
