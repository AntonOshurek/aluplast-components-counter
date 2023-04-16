import type { PigmentsSettingsNames, GumsSettingsNames, ChemistrySettingsNames } from "../variables/variables";

export interface IPigmentsSettingsType {
  [PigmentsSettingsNames.CONTAINER_WEIGHT]: number,
  [PigmentsSettingsNames.VOREK_WEIGHT]: number,
};

export interface IGumsSettingsType {
  [GumsSettingsNames.CARDBOARD_WEIGHT]: number,
};

export interface IChemistrySettingsType {
  [ChemistrySettingsNames.BASIC_CHEMISTRY_AMOUNT]: number,
};

export type SettingsType = IPigmentsSettingsType | IGumsSettingsType;

export interface ILogsDataType {
  [key: string]: string[],
};

export interface IItemDataType {
  UNID: string,
  amount: number,
  firm: string,
  name: string,
  itemNumber: string,
  description: string,
  image: string,
  color: string,
  logs: ILogsDataType,
};

export type IDataType = IItemDataType[];

export interface IAdaptedDataType {
  [propertyName: string]: IItemDataType,
};
