export const enum AppRoute {
  ROOT = '/',
  SETTINGS = '/settings',
  GRANULATES_PAGE = '/granulates',
  GRANULATES_COUNTER = '/granulates/:UNID',
  GRANULATES_COUNTER_CONTAINER = 'container',
  GRANULATES_COUNTER_VOREK = 'vorek',
}

export enum ComponentsTexts {
  SETTING_PAGE_SAVE_BUTTON = 'Save settings',
  SETTINGS_PAGE_RESET_SETTINGS = 'Reset All settings',
  SETTINGS_RESET_COUNTER_DATA = 'Reset counter data!',
  GRANULATES_COUNTER_ADD_BUTTON = 'Add value',
  GRANULATES_COUNTER_PLUS_BUTTON = 'Plus',
  GRANULATES_COUNTER_MINUS_BUTTON = 'Minus',
}

export enum GranulatesSettingsNames {
  VOREK_WEIGHT = 'basicVorekWeight',
  CONTAINER_WEIGHT = 'basicContainerWeight',
}
