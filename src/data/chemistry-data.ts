//types
import type { IDataType, IChemistrySettingsType } from "../types/data-types";
//variables and constants
import { ChemistryLogsNames, ChemistrySettingsNames } from "../variables/variables";


//settings data now is unused...
export const basicChemistrySettings: IChemistrySettingsType = {
  [ChemistrySettingsNames.BASIC_CHEMISTRY_AMOUNT]: 1,
};

export const basicChemistryData: IDataType = [
  {
    UNID: 300,
    amount: 0,
    firm: '',
    name: 'Solvent',
    itemNumber: '77001-003',
    description: 'Drukarki Leibinger Jet2neo/jet2neos',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: 301,
    amount: 0,
    firm: '',
    name: 'Atrament',
    itemNumber: '770000-00030',
    description: 'Drukarki Leibinger Jet2neo/jet2neos',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: 302,
    amount: 0,
    firm: '',
    name: 'Solvent',
    itemNumber: 'SJN1700',
    description: 'Drukarki Leibinger Jet2neo/jet2neos',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },

  {
    UNID: 303,
    amount: 0,
    firm: '',
    name: 'Make-up',
    itemNumber: 'VJ706-D',
    description: 'Dotyczy drukarek 1220',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: 304,
    amount: 0,
    firm: '',
    name: 'Atrament',
    itemNumber: 'VJ411-D',
    description: 'Dotyczy drukarek 1220',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },

  {
    UNID: 305,
    amount: 0,
    firm: '',
    name: 'Make-up',
    itemNumber: 'VJ7222-D',
    description: 'Dotyczy drukarek 1580',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: 306,
    amount: 0,
    firm: '',
    name: 'Atrament',
    itemNumber: 'VJ4262-D',
    description: 'Dotyczy drukarek 1580',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '',
    logs: {
      [ChemistryLogsNames.COUNTER]: [],
    },
  },
]
