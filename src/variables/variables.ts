export const rootBaseName = '/aluplast-components-counter';

export const enum AppRoute {
  //basic/main paths
  ROOT = '/',
  SETTINGS = '/settings',
  INFORMATION = '/information',
  COMPONENTS_OVERVIEW = '/components-overview',

  //pigments/pegmenty paths
  PIGMENTS_PAGE = '/pigments',
  PIGMENTS_COUNTER = '/pigments/:UNID',
  PIGMENTS_COUNTER_CONTAINER = 'container',
  PIGMENTS_COUNTER_VOREK = 'vorek',

  //gums/uszczelka paths
  GUM_PAGE = '/gums',
  GUM_COUNTER = '/gums/:UNID',
  GUM_COUNTER_CARDBOARD = 'cardboard',

  CHEMISTRY_PAGE = '/chemistry',
  CHEMISTRY_COUNTER = '/chemistry/:UNID',
};

export enum InputStatuses {
  SUCCESS = 'success',
  ERROR = 'error',
  DEFAULT = '',
};

export enum ComponentsTexts {
  APPLICATION_HEADER_TITLE = 'Aplikacja Aluplast - licznik komponentów',
  APPLICATION_NAVIGATION_TITLE = 'Nawigacja aplikacji',
  ROOT_PAGE_TITLE = 'Strona główna',
  OVERVIEW_PAGE_TITLE = 'Przegląd',
  COUNTER_PAGE_TITLE = 'Przegląd licznika',
  PIGMENTS_COUNTER_PAGE_TITLE = 'licznik pegmentów',

  PIGMENTS_COUNTER_NAME = 'pigmenty',
  PIGMENTS_COUNTER_VOREK_NAME = 'Worki',
  PIGMENTS_COUNTER_BASIC_NAME = 'Licznik',
  PIGMENTS_COUNTER_CONTAINER_NAME = 'Kontenery',
  PIGMENTS_COUNTER_CONTAINER_ADDED_AMOUNT_TITLE = 'Jeden kontener - ',

  ITEMS_COUNTER_ADDED_AMOUNT_TITLE = 'Jedno kliknięcie +',

  GUM_COUNTER_NAME = 'uszczelka',
  GUMS_COUNTER_BASIC_NAME = 'Licznik',
  GUMS_COUNTER_CARDBOARD_NAME = 'Kartony',
  GUMS_COUNTER_PAGE_TITLE = 'Licznik uszczelki',

  CHEMISTRY_COUNTER_NAME = 'chemia',
  CHEMISTRY_COUNTER_PAGE_TITLE = 'Licznik chemii',

  SETTING_PIGMENTS_TITLE = 'Ustawienia pegmenty',
  SETTING_PIGMENTS_VOREK_INPUT = 'Waga jednego worka / KG',
  SETTING_PIGMENTS_CONTAINER_INPUT = 'Waga jednego kontenera / KG',
  SETTING_GUMS_TITLE = 'Ustawienia uszczelka',
  SETTING_GUMS_CARDBOARD_INPUT = 'Waga jednego kartonu / KG',
  SETTING_CHEMISTRY_TITLE = 'Ustawienia chemia',
  SETTING_SAVE = 'Zapisz ustawienia',
  SETTING_RESET_COUNTER_DATA = 'Usunąć dane licznika',

  INFO_REQUEST_TO_DELETE_DATA = 'Napewno chcesz usunąć dane licznika',
  INFO_DATA_DELETED = 'Wybrane dane zostali usunięci',

  COUNTER_ADD_BUTTON = 'Dodaj',
  COUNTER_PLUS_BUTTON = 'Plus +',
  COUNTER_MINUS_BUTTON = 'Minus -',

  BUTTON_ACTION_CANCEL = 'Odwołaj',
  BUTTON_ACTION_CONFIRM = 'Usunąć wybrane dane',
  BUTTON_ACTION_CLOSE = 'Zamknij powiadomienie',
};

//this vars used inside store and settings inputs values! Dont delet or change!\

//if you added new SETTINGS variables, you need added to variables-types.ts!
//SETTINGS
export enum PigmentsSettingsNames {
  VOREK_WEIGHT = 'basicVorekWeight',
  CONTAINER_WEIGHT = 'basicContainerWeight',
};
export enum GumsSettingsNames {
  CARDBOARD_WEIGHT = 'basicCardboardWeight',
};
export enum ChemistrySettingsNames {
  BASIC_CHEMISTRY_AMOUNT = 'basicChemistyAmount',
};

//STORAGE
export enum ApplicationStorageApiNames {
  PIGMENTS_STORAGE = 'pigments',
  GUMS_STORAGE = 'gums',
  CHEMISTRY_STORAGE = 'chemistry',
};

//if you added new LOGS variables, you need added this to variables-types.ts!
//LOGS
export enum PigmentsLogsNames {
  CONTAINER = 'kontaner',
  VOREK = 'vorek',
  COUNTER = 'licznik-pegmentów',
};
export enum GumsLogsNames {
  COUNTER = 'licznik-gumy',
  CARDBOARD = 'kartony',
};
export enum ChemistryLogsNames {
  COUNTER = 'licznik-chemii',
};
