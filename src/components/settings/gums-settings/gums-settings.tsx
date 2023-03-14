import { ChangeEvent } from 'react';
//components
import { ButtonRemove } from '../../controls';
//store
import { clearStoreAction } from '../../../store/slices/gums-slice';
import { useAppDispatch } from '../../../hooks/hooks';
//types
import type  { IGumsSettingsType } from '../../../types/data-types';
//variables and constants
import { ComponentsTexts, GumsSettingsNames } from '../../../variables/variables';
//style
import '../components-settings.scss';

interface IGumsSettingsPropsType {
  inputsHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: IGumsSettingsType,
};

const GumsSettings = ({inputsHandler, value}: IGumsSettingsPropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const resetCounter = () => {
    dispatch(clearStoreAction());
  };

  return (
    <section className='components-settings'>
      <h3 className='components-settings__title'>{ComponentsTexts.SETTING_GUMS_TITLE}</h3>

      <form className='components-settings__form'>

        <label className='components-settings__label'>
          {ComponentsTexts.SETTING_GUMS_CARDBOARD_INPUT}

          <input className='components-settings__input' type="number"
            value={value.basicCardboardWeight || ''}
            data-input-name={GumsSettingsNames.CARDBOARD_WEIGHT}
            onChange={inputsHandler}
          />
        </label>

      </form>

      <ButtonRemove dataToDeleteName={ComponentsTexts.GUM_COUNTER_NAME} onButtonClickHandler={resetCounter}/>
    </section>
  );
};

export default GumsSettings;
