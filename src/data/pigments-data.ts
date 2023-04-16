//types
import type { IPigmentsSettingsType, IDataType } from "../types/data-types";
//variables and consts
import { PigmentsLogsNames, PigmentsSettingsNames } from "../variables/variables";
//libs
import { nanoid } from '@reduxjs/toolkit';

export const basicPigmentsSettings: IPigmentsSettingsType = {
  [PigmentsSettingsNames.VOREK_WEIGHT]: 25,
  [PigmentsSettingsNames.CONTAINER_WEIGHT]: 77,
};

//pigments
export const basicPigmentsData: IDataType = [
  {
    UNID: `pigments-${nanoid()}`,
    amount: 0,
    firm: '',
    itemNumber: '',
    color: '',
    name: 'HEUCOBATCH Cream 190 193',
    description: '',
    image: '/aluplast-components-counter/images/pigments/pigment-cream.jpg',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'HEUCOBATCH Ocher brown',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-ochra.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'CROMOFIX MARRON/BROWN IQAP',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-braz.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Sicovinyl Black 02-270795 BASF',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-braz.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Sicovinyl White 00-9065 BASF',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-bialy.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Sicovinyl Yellow 10-0895 BASF',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-zolty.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Evicom granulat ACF400/5hellblau 5154',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-shelblue.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Dryblend chłodzący Colorstab',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-shelblue.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'B1800055 HEUCOBATCH Dark grey 790 199',
    firm: '',
    itemNumber: '',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-antracyt.jpg',
    description: '',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
];
