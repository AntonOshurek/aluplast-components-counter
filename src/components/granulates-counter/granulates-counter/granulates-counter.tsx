import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
//components
import { CounterSetValue } from '../../counter-controls';
import { ButtonAdd } from '../../controls';
//consts and variables
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { incrementAction } from '../../../store/slices/counter-slice';
//styles
import '../granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 100;

  const [value, setValue] = useState<number>(defaultCounterValue);
  const [valueError, setValueError] = useState<string>('')

  const setError = (errorMessage: string): void => {
    setValueError(errorMessage);
    setTimeout(() => setValueError(''), 1000)
  }

  const onInputValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(+evt.target.value)
  }

  const onAddButtonClickHandler = (): void => {
    if(value === NaN) {
      setError('You can\'t add zero');
    } else {
      dispatch(incrementAction({UNID: currentItemUNID, value: value}));
    }
  }

  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>{ComponentsTexts.GRANULATES_COUNTER_NAME} {ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}</h3>

      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>
      <ButtonAdd
        onButtonClickHandler={onAddButtonClickHandler}
        errorMessage={valueError}
        buttonText={ComponentsTexts.GRANULATES_COUNTER_ADD_BUTTON}
      />

    </section>
  )
}

export default GranulatesCounter;
