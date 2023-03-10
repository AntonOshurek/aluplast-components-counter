import { ChangeEvent } from 'react';
//components
import { ButtonRemove } from '../../controls';
//consts and variables
import { GranulatesSettingsNames } from '../../../variables/variables';
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { clearStoreAction } from '../../../store/slices/granulates-slice';
//types
import type { IGranulatesSettingsType } from '../../../types/data-types';
//styles
import './granulates-settings.scss';

interface IGranulatesSettingsPropsType {
  inputsHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: IGranulatesSettingsType
};

const GranulatesSettings = ({inputsHandler, value}: IGranulatesSettingsPropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const resetCounter = () => {
    dispatch(clearStoreAction());
  };

  return (
    <section className='granulates-settings'>
      <h3 className='granulates-settings__title'>{ComponentsTexts.SETTING_GRANULATES_TITLE}</h3>

      <form className='granulates-settings__form'>

        <label className='granulates-settings__label'>
          {ComponentsTexts.SETTING_GRANULATES_VOREK_INPUT}

          <input className='granulates-settings__input' type="number"
            value={value.basicVorekWeight || ''}
            data-input-name={GranulatesSettingsNames.VOREK_WEIGHT}
            onChange={inputsHandler}
          />
        </label>
        <label className='granulates-settings__label'>
          {ComponentsTexts.SETTING_GRANULATES_CONTAINER_INPUT}

          <input className='granulates-settings__input' type="number"
            value={value.basicContainerWeight || ''}
            data-input-name={GranulatesSettingsNames.CONTAINER_WEIGHT}
            onChange={inputsHandler}
          />
        </label>

      </form>

      <ButtonRemove dataToDeleteName={ComponentsTexts.GRANULATES_COUNTER_NAME} onButtonClickHandler={resetCounter}/>
    </section>
  );
};

export default GranulatesSettings;
