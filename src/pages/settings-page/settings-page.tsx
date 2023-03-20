import { useState, ChangeEvent, useEffect } from 'react';
//component
import Header from '../../components/header/header';
import PigmentsSettings from '../../components/settings/pigments-settings/pigments-settings';
import GumsSettings from '../../components/settings/gums-settings/gums-settings';
import ChemistrySettings from '../../components/settings/chemistry-settings/chemistry-settings';
import { ButtonAdd } from '../../components/controls';
//consts and variables
import { ComponentsTexts, PigmentsSettingsNames, GumsSettingsNames } from '../../variables/variables';
//types
import type { IPigmentsSettingsType, IGumsSettingsType } from '../../types/data-types';
//store
import { setSettingsAction as pigmentsSetSettings } from '../../store/slices/pigments-slice';
import { setSettingsAction as gumsSetSettings } from '../../store/slices/gums-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { SelectorGetPigmentsSettings, SelectorGetGumsSettings } from '../../store/selectors/selectors';
//styles
import './settings-page.scss';

const SettingsPage = (): JSX.Element => {
  const basicPigmentsSettings = useAppSelector(SelectorGetPigmentsSettings);
  const basicGumsSettings = useAppSelector(SelectorGetGumsSettings);
  const dispatch = useAppDispatch();

  const [pigmentsSettings, setPigmentsSettings] = useState<IPigmentsSettingsType>(basicPigmentsSettings);
  const [gumsSettings, setGumsSettings] = useState<IGumsSettingsType>(basicGumsSettings);

  const onSettingSubmitButtonClickHandler = (): void => {
    dispatch(pigmentsSetSettings(pigmentsSettings));
    dispatch(gumsSetSettings(gumsSettings));
  };

  const onSettingsInputsHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    const inputName: string | null = evt.target.getAttribute('data-input-name');
    const inputValue: number = +evt.target.value;

    switch(inputName) {
      case PigmentsSettingsNames.VOREK_WEIGHT:
        setPigmentsSettings({...pigmentsSettings, [PigmentsSettingsNames.VOREK_WEIGHT]: inputValue});
        break;
      case PigmentsSettingsNames.CONTAINER_WEIGHT:
        setPigmentsSettings({...pigmentsSettings, [PigmentsSettingsNames.CONTAINER_WEIGHT]: inputValue});
        break;
      case GumsSettingsNames.CARDBOARD_WEIGHT:
        setGumsSettings({...gumsSettings, [GumsSettingsNames.CARDBOARD_WEIGHT]: inputValue});
        break;
      default:
        throw new Error('Required');
    };
  };

  useEffect(() => {
    setPigmentsSettings(basicPigmentsSettings);
  }, [basicPigmentsSettings]);

  return (
    <div className='settings-page'>
      <Header/>

      <main className='settings-page__main container'>

        <ChemistrySettings/>

        <PigmentsSettings
          inputsHandler={onSettingsInputsHandler}
          value={pigmentsSettings}
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
  );
};

export default SettingsPage;
