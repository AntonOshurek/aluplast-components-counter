import { ChangeEvent } from 'react';
//components
import { ButtonResetRemove } from '../../controls';
//consts and variables
import { GranulatesSettingsNames } from '../../../variables/variables';
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { clearStoreAction } from '../../../store/slices/counter-slice';
//types
import type { IGranulatesSettingsType } from '../../../types/data-types';
//styles
import './granulates-settings.scss';

interface GranulatesSettingsPropsType {
  inputsHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: IGranulatesSettingsType
}

const GranulatesSettings = ({inputsHandler, value}: GranulatesSettingsPropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const resetCounter = () => {
    dispatch(clearStoreAction());
  }

  return (
    <section className='granulates-settings'>
      <h3 className='granulates-settings__title'>Granulates settings</h3>
      <form className='granulates-settings__form'>
        <label className='granulates-settings__label'>
          one vorek kg value
          <input className='granulates-settings__input' type="number"
            value={value.basicVorekWeight || ''}
            data-input-name={GranulatesSettingsNames.VOREK_WEIGHT}
            onChange={inputsHandler}
          />
        </label>
        <label className='granulates-settings__label'>
          default one container weight
          <input className='granulates-settings__input' type="number"
            value={value.basicContainerWeight || ''}
            data-input-name={GranulatesSettingsNames.CONTAINER_WEIGHT}
            onChange={inputsHandler}
          />
        </label>
      </form>
      <ButtonResetRemove buttonText={ComponentsTexts.SETTINGS_RESET_COUNTER_DATA} onButtonClickHandler={resetCounter}/>
    </section>
  )
}

export default GranulatesSettings;
