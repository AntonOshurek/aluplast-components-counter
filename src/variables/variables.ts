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
  GRANULATES_COUNTER_ADD_BUTTON = 'Dodaj',
  GRANULATES_COUNTER_PLUS_BUTTON = 'Plus',
  GRANULATES_COUNTER_MINUS_BUTTON = 'Minus',

  SETTING_SAVE = 'Zapisz ustawienia',
  SETTING_RESET_COUNTER_DATA = 'Usunąć dane licznika',

  SETTING_GRANULATES_TITLE = 'Ustawienia granulaty',
  SETTING_GRANULATES_VOREK_INPUT = 'Waga jednego worka / KG',
  SETTING_GRANULATES_CONTAINER_INPUT = 'Waga jednego kontenera / KG',
  SETTING_GRANULATE_COUNTER_NAME = 'granulaty',

  REMOVE_CANCEL = 'Odwołaj',
  REMOVE_CONFIRM = 'Usunąć wybrane dane',
  REMOVE_CLOSE = 'Zamknij powiadomienie',
}

//this vars used inside store and settings inputs values! Dont delet or change!
export enum GranulatesSettingsNames {
  VOREK_WEIGHT = 'basicVorekWeight',
  CONTAINER_WEIGHT = 'basicContainerWeight',
}

export enum GranulatesStorageApiNames {
  GRANULATES_STORAGE = 'granulates',
}
