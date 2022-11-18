export const rootBaseName = '/aluplas-granules-counter';

export const enum AppRoute {
  ROOT = '/',
  SETTINGS = '/settings',
  GRANULATES_PAGE = '/granulates',
  GRANULATES_COUNTER = '/granulates/:UNID',
  GRANULATES_COUNTER_CONTAINER = 'container',
  GRANULATES_COUNTER_VOREK = 'vorek',
}

export enum ComponentsTexts {
  SETTING_PAGE_SAVE_BUTTON = 'Zapisz ustawienia',
  SETTINGS_RESET_COUNTER_DATA = 'Usunąć dane licznika',
  GRANULATES_COUNTER_ADD_BUTTON = 'Dodaj',
  GRANULATES_COUNTER_PLUS_BUTTON = 'Plus',
  GRANULATES_COUNTER_MINUS_BUTTON = 'Minus',
  CONFIRM = 'Potwirdz',
  CANCEL = 'Odwołaj',
  DELETE_ACCEPT = 'Usunąć wybrane dane',
  CLOSE_MODAL = 'Zamknij powiadomienie',
}

export enum GranulatesSettingsNames {
  VOREK_WEIGHT = 'basicVorekWeight',
  CONTAINER_WEIGHT = 'basicContainerWeight',
}

export enum GranulatesStorageApiNames {
  GRANULATES_STORAGE = 'granulates',
}
