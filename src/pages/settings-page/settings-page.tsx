import { useState, ChangeEvent, useEffect } from 'react';
//component
import Header from '../../components/header/header';
import GranulatesSettings from '../../components/settings/granulates-settings/granulates-settings';
import GumsSettings from '../../components/settings/gums-settings/gums-settings';
import { ButtonAdd } from '../../components/controls';
//consts and variables
import { ComponentsTexts, GranulatesSettingsNames, GumsSettingsNames } from '../../variables/variables';
//types
import type { IGranulatesSettingsType, IGumsSettingsType } from '../../types/data-types';
//store
import { setSettingsAction as granulatesSetSettings } from '../../store/slices/granulates-slice';
import { setSettingsAction as gumsSetSettings } from '../../store/slices/gums-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SelectorGetGranulatesSettings, SelectorGetGumsSettings } from '../../store/selectors/selectors';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
  const basicGranulatesSettings = useAppSelector(SelectorGetGranulatesSettings);
  const basicGumsSettings = useAppSelector(SelectorGetGumsSettings);
  const dispatch = useAppDispatch();

  const [granulatesSettings, setGranulatesSettings] = useState<IGranulatesSettingsType>(basicGranulatesSettings);
  const [gumsSettings, setGumsSettings] = useState<IGumsSettingsType>(basicGumsSettings);

  const onSettingSubmitButtonClickHandler = (): void => {
    dispatch(granulatesSetSettings(granulatesSettings));
    dispatch(gumsSetSettings(gumsSettings));
  };

  const onSettingsInputsHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    const inputName: string | null = evt.target.getAttribute('data-input-name');
    const inputValue: number = +evt.target.value;

    switch(inputName) {
      case GranulatesSettingsNames.VOREK_WEIGHT:
        setGranulatesSettings({...granulatesSettings, [GranulatesSettingsNames.VOREK_WEIGHT]: inputValue});
        break;
      case GranulatesSettingsNames.CONTAINER_WEIGHT:
        setGranulatesSettings({...granulatesSettings, [GranulatesSettingsNames.CONTAINER_WEIGHT]: inputValue});
        break;
      case GumsSettingsNames.CARDBOARD_WEIGHT:
        setGumsSettings({...gumsSettings, [GumsSettingsNames.CARDBOARD_WEIGHT]: inputValue});
        break;
      default:
        throw new Error('Required');
    };
  };

  useEffect(() => {
    setGranulatesSettings(basicGranulatesSettings);
  }, [basicGranulatesSettings]);

  return (
    <div className='settings-page'>
      <Header/>

      <main className='settings-page__main container'>

        <GranulatesSettings
          inputsHandler={onSettingsInputsHandler}
          value={granulatesSettings}
        />

        <GumsSettings
          inputsHandler={onSettingsInputsHandler}
          value={gumsSettings}
        />

        <ButtonAdd
          onButtonClickHandler={onSettingSubmitButtonClickHandler}
          errorMessage={''}
          buttonText={ComponentsTexts.SETTING_SAVE}
        />
      </main>
    </div>
  )
}

export default SettingsPage;
