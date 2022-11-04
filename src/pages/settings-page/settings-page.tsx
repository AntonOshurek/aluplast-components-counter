import { useState, ChangeEvent } from 'react';
//component
import Header from '../../components/header/header';
import GranulatesSettings from '../../components/settings/granulates-settings/granulates-settings';
import ButtonAdd from '../../components/controls/button-add/button-add';
//consts and variables
import { ComponentsTexts, GranulatesSettingsNames } from '../../variables/variables';
//types
import { GranulatesSettingsType } from '../../types/data-types';
//store
import { setNewSettings } from '../../store/slices/counter-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getGranulatesSettings } from '../../store/selectors/selectors';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
  const basicGranulatesSettings = useAppSelector(getGranulatesSettings);
  const dispatch = useAppDispatch();

  const [granulatesSettings, setGranulatesSettings] = useState<GranulatesSettingsType>(basicGranulatesSettings);

  const onSettingSubmitButtonClickHandler = (): void => {
    dispatch(setNewSettings(granulatesSettings));
    console.log('save settings');
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

  return (
    <div className='settings-page'>
      <Header/>

      <main className='settings-page__main container'>
        <GranulatesSettings
          inputsHandler={onSettingsInputsHandler}
          defaultValue={granulatesSettings}
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
