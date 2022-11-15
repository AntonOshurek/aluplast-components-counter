import { useState, ChangeEvent, useEffect } from 'react';
//component
import Header from '../../components/header/header';
import GranulatesSettings from '../../components/settings/granulates-settings/granulates-settings';
import { ButtonAdd } from '../../components/controls';
//consts and variables
import { ComponentsTexts, GranulatesSettingsNames } from '../../variables/variables';
//types
import type { IGranulatesSettingsType } from '../../types/data-types';
//store
import { setSettingsAction, resetSettingsToDefault, clearStoreAction } from '../../store/slices/counter-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SelectorGetGranulatesSettings } from '../../store/selectors/selectors';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
  const basicGranulatesSettings = useAppSelector(SelectorGetGranulatesSettings);
  const dispatch = useAppDispatch();

  const [granulatesSettings, setGranulatesSettings] = useState<IGranulatesSettingsType>(basicGranulatesSettings);

  const onSettingSubmitButtonClickHandler = (): void => {
    dispatch(setSettingsAction(granulatesSettings));
  }

  const onResetSettingsButtonHandler = () => {
    dispatch(resetSettingsToDefault());
  }

  const resetCounter = () => {
    dispatch(clearStoreAction());
  }

  const onSettingsInputsHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    const inputName: string | null = evt.target.getAttribute('data-input-name');
    const inputValue: number = +evt.target.value;

    switch(inputName) {
      case GranulatesSettingsNames.VOREK_WEIGHT:
        setGranulatesSettings({...granulatesSettings, [GranulatesSettingsNames.VOREK_WEIGHT]: inputValue})
        break;
      case GranulatesSettingsNames.CONTAINER_WEIGHT:
        setGranulatesSettings({...granulatesSettings, [GranulatesSettingsNames.CONTAINER_WEIGHT]: inputValue})
        break;
      default:
        throw new Error('Required');
    }
  }

  useEffect(() => {
    setGranulatesSettings(basicGranulatesSettings);
  }, [basicGranulatesSettings]);

  return (
    <div className='settings-page'>
      <Header/>

      <main className='settings-page__main container'>

        <ButtonAdd
          onButtonClickHandler={resetCounter}
          errorMessage={''}
          buttonText={ComponentsTexts.SETTINGS_RESET_COUNTER_DATA}
        />

        <ButtonAdd
          onButtonClickHandler={onResetSettingsButtonHandler}
          errorMessage={''}
          buttonText={ComponentsTexts.SETTINGS_PAGE_RESET_SETTINGS}
        />

        <GranulatesSettings
          inputsHandler={onSettingsInputsHandler}
          value={granulatesSettings}
        />

        <ButtonAdd
          onButtonClickHandler={onSettingSubmitButtonClickHandler}
          errorMessage={''}
          buttonText={ComponentsTexts.SETTING_PAGE_SAVE_BUTTON}
        />
      </main>
    </div>
  )
}

export default SettingsPage;
