//types
import type { IDataType, IGumsSettingsType } from "../types/data-types";
//variables and consts
import { GumsSettingsNames, GumsLogsNames } from "../variables/variables";
//libs
import { nanoid } from 'nanoid';

export const basicGumsSettings: IGumsSettingsType = {
  [GumsSettingsNames.CARDBOARD_WEIGHT]: 500,
};

export const basicGumsData: IDataType = [
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'ALFA PVC',
    name: 'Uszczelka czarna dynamiczna do profili',
    itemNumber: '794125',
    description: '(kolor etykiety niebieski)',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '#BDD7EE',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'ALFA PVC',
    name: 'Uszczelka czarna dynamicznado profili',
    itemNumber: '794125',
    description: '(kolor etykiety niebieski 2x250)',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '#BDD7EE',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'ALFA PVC',
    name: 'Uszczelka szara dynamiczna do profili',
    itemNumber: '794126',
    description: '(kolor etykiety zielony)',
    image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
    color: '#C6E0B4',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'ALFA PVC',
    name: 'Uszczelka szara dynamiczna do profili',
    itemNumber: '794126',
    description: '(kolor etykiety zielony) 2x250',
    image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
    color: '#C6E0B4',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'ALFA PVC',
    name: 'Uszczelka szara statyczna do listwy',
    itemNumber: '794091',
    description: '(kolor etykiety pomarańczowy)',
    image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
    color: '#d0312d',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'INEOS',
    name: 'Uszczelka szara statyczna do listwy',
    itemNumber: '794091',
    description: '(kolor etykiety pomarańczowy)',
    image: '/aluplast-components-counter/images/gums/uszczelka szara.jpg',
    color: '#F4B084',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'ALFA PVC',
    name: 'Uszczelka czarna statyczna do listwy',
    itemNumber: '794096A',
    description: '(kolor etykiety biały)',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '#ffff00',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
  {
    UNID: nanoid(),
    amount: 0,
    firm: 'INEOS',
    name: 'Uszczelka czarna statyczna do listwy',
    itemNumber: '794096A',
    description: '(kolor etykiety biały)',
    image: '/aluplast-components-counter/images/gums/uszczelka czarna.jpg',
    color: '#ffffff',
    logs: {
      [GumsLogsNames.CARDBOARD]: [],
      [GumsLogsNames.COUNTER]: [],
    },
  },
];
