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
    name: 'CROMOFIX MARRON/BROWN IQAP',
    firm: 'AURUM',
    itemNumber: '799549',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-braz.jpg',
    description: 'Pigment brązowy',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'B1800055 HEUCOBATCH Dark grey 790 199',
    firm: 'MASTERTEC',
    itemNumber: '799531',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-antracyt.jpg',
    description: 'Pigment antracyt',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'HEUCOBATCH Cream 190 193',
    firm: 'MASTERTEC',
    itemNumber: '799602',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-cream.jpg',
    description: 'Pigment krem',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'HEUCOBATCH Ocher brown',
    firm: 'MASTERTEC',
    itemNumber: '799547',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-ochra.jpg',
    description: 'Pigment ochra',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'B1800488 dark brown',
    firm: 'MASTERTEC',
    itemNumber: '799290',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-braz.jpg',
    description: 'Pigment brązowy',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Sicovinyl White 00-9065 BASF',
    firm: 'BASF',
    itemNumber: '799600',
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
    firm: 'BASF',
    itemNumber: '799805',
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
    name: 'Sicovinyl Black 02-270795 BASF',
    firm: 'BASF',
    itemNumber: '799544',
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
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Evicom granulat ACF400/5hellblau 5154 ',
    firm: 'INEOS/Ekomer',
    itemNumber: '799199',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-shelblue.jpg',
    description: 'Masa wysokostabilna',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: `pigments-${nanoid()}`,
    name: 'Dryblend chłodzący Colorstab',
    firm: 'Colorstab',
    itemNumber: '799199',
    color: '',
    amount: 0,
    image: '/aluplast-components-counter/images/pigments/pigment-shelblue.jpg',
    description: 'Masa wysokostabilna',
    logs: {
      [PigmentsLogsNames.CONTAINER]: [],
      [PigmentsLogsNames.VOREK]: [],
      [PigmentsLogsNames.COUNTER]: [],
    },
  },

];
