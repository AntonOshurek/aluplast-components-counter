//styles
import { ChangeEvent } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { clearStoreAction } from '../../../store/slices/gums-slice';
import { IGumsSettingsType } from '../../../types/data-types';
import { ComponentsTexts, GumsSettingsNames } from '../../../variables/variables';
import { ButtonRemove } from '../../controls';
import './gums-settings.scss';

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
    <section className='pigments-settings'>
      <h3 className='pigments-settings__title'>{ComponentsTexts.SETTING_GUMS_TITLE}</h3>

      <form className='pigments-settings__form'>

        <label className='pigments-settings__label'>
          {ComponentsTexts.SETTING_GUMS_CARDBOARD_INPUT}

          <input className='pigments-settings__input' type="number"
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
