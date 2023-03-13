export const rootBaseName = '/aluplast-components-counter';

export const enum AppRoute {
  //basic/main paths
  ROOT = '/',
  SETTINGS = '/settings',
  INFORMATION = '/information',

  //pigments/pegmenty paths
  PIGMENTS_PAGE = '/pigments',
  PIGMENTS_COUNTER = '/pigments/:UNID',
  PIGMENTS_COUNTER_CONTAINER = 'container',
  PIGMENTS_COUNTER_VOREK = 'vorek',

  //gums/uszczelka paths
  GUM_PAGE = '/gums',
  GUM_COUNTER = '/gums/:UNID',
  GUM_COUNTER_CARDBOARD = 'cardboard',
};

export enum InputStatuses {
  SUCCESS = 'success',
  ERROR = 'error',
  DEFAULT = '',
};

export enum ComponentsTexts {
  ROOT_PAGE_TITLE = 'Strona główna',
  OVERVIEW_PAGE_TITLE = 'Przegląd',
  GRANULATES_COUNTER_PAGE_TITLE = 'licznik pegmentów',
  GUMS_COUNTER_PAGE_TITLE = 'Licznik uszczelki',

  GRANULATES_COUNTER_VOREK_NAME = 'Worki',
  GRANULATES_COUNTER_BASIC_NAME = 'Licznik',
  GRANULATES_COUNTER_CONTAINER_NAME = 'Kontenery',

  GUMS_COUNTER_BASIC_NAME = 'Licznik',
  GUMS_COUNTER_CARDBOARD_NAME = 'Kartony',

  GRANULATES_COUNTER_CONTAINER_ADDED_AMOUNT_TITLE = 'Jeden kontener - ',
  GRANULATES_COUNTER_VOREK_ADDED_AMOUNT_TITLE = 'Jedno kliknięcie +',

  GRANULATES_COUNTER_NAME = 'pigmenty',
  GRANULATES_COUNTER_ADD_BUTTON = 'Dodaj',
  GRANULATES_COUNTER_PLUS_BUTTON = 'Plus',
  GRANULATES_COUNTER_MINUS_BUTTON = 'Minus',

  GUM_COUNTER_NAME = 'uszczelka',

  COUNTER_ADD_BUTTON = 'Dodaj',
  COUNTER_PLUS_BUTTON = 'Plus +',
  COUNTER_MINUS_BUTTON = 'Minus -',

  SETTING_SAVE = 'Zapisz ustawienia',
  SETTING_RESET_COUNTER_DATA = 'Usunąć dane licznika',

  SETTING_GRANULATES_TITLE = 'Ustawienia pegmenty',
  SETTING_GRANULATES_VOREK_INPUT = 'Waga jednego worka / KG',
  SETTING_GRANULATES_CONTAINER_INPUT = 'Waga jednego kontenera / KG',
  SETTING_GUMS_TITLE = 'Ustawienia uszczelka',
  SETTING_GUMS_CARDBOARD_INPUT = 'Waga jednego kartonu / KG',

  REMOVE_CANCEL = 'Odwołaj',
  REMOVE_CONFIRM = 'Usunąć wybrane dane',
  REMOVE_CLOSE = 'Zamknij powiadomienie',
};

//this vars used inside store and settings inputs values! Dont delet or change!\

//SETTINGS
export enum PigmentsSettingsNames {
  VOREK_WEIGHT = 'basicVorekWeight',
  CONTAINER_WEIGHT = 'basicContainerWeight',
};
export enum GumsSettingsNames {
  CARDBOARD_WEIGHT = 'basicCardboardWeight',
};
export type SettingsNamesType = PigmentsSettingsNames | GumsSettingsNames;

//STORAGE
export enum ApplicationStorageApiNames {
  PIGMENTS_STORAGE = 'pigments',
  GUMS_STORAGE = 'gums',
};

//LOGS
export enum PigmentsLogsNames {
  CONTAINER = 'container',
  VOREK = 'vorek',
  COUNTER = 'counter',
};
export enum GumsLogsNames {
  COUNTER = 'licznik',
  CARDBOARD = 'kartony',
};
export type logNamesType = PigmentsLogsNames | GumsLogsNames;
