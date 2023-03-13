import { ChangeEvent } from 'react';
//components
import { ButtonRemove } from '../../controls';
//consts and variables
import { PigmentsSettingsNames } from '../../../variables/variables';
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { clearStoreAction } from '../../../store/slices/pigments-slice';
//types
import type { IPigmentsSettingsType } from '../../../types/data-types';
//styles
import './pigments-settings.scss';

interface IPigmentsSettingsPropsType {
  inputsHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: IPigmentsSettingsType
};

const PigmentsSettings = ({inputsHandler, value}: IPigmentsSettingsPropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const resetCounter = () => {
    dispatch(clearStoreAction());
  };

  return (
    <section className='pigments-settings'>
      <h3 className='pigments-settings__title'>{ComponentsTexts.SETTING_GRANULATES_TITLE}</h3>

      <form className='pigments-settings__form'>

        <label className='pigments-settings__label'>
          {ComponentsTexts.SETTING_GRANULATES_VOREK_INPUT}

          <input className='pigments-settings__input' type="number"
            value={value.basicVorekWeight || ''}
            data-input-name={PigmentsSettingsNames.VOREK_WEIGHT}
            onChange={inputsHandler}
          />
        </label>
        <label className='pigments-settings__label'>
          {ComponentsTexts.SETTING_GRANULATES_CONTAINER_INPUT}

          <input className='pigments-settings__input' type="number"
            value={value.basicContainerWeight || ''}
            data-input-name={PigmentsSettingsNames.CONTAINER_WEIGHT}
            onChange={inputsHandler}
          />
        </label>

      </form>

      <ButtonRemove dataToDeleteName={ComponentsTexts.GRANULATES_COUNTER_NAME} onButtonClickHandler={resetCounter}/>
    </section>
  );
};

export default PigmentsSettings;
