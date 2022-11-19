import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
//components
import { CounterSetValue } from '../../counter-controls';
import { ButtonChoice } from '../../controls';
//consts and variables
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { incrementAction, decrementAction } from '../../../store/slices/counter-slice';
//styles
import '../granulates-counter.scss';

const GranulatesCounter = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 100;

  const [value, setValue] = useState<number>(defaultCounterValue);

  const onInputValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(+evt.target.value)
  }

  const incrementHandler = (): void => {
    if(value <= 0 || value === NaN) {
      console.log('sdfsd');
    } else {
      dispatch(incrementAction({UNID: currentItemUNID, value: value}));
    }
  }

  const decrementHandler = (): void => {
    if(value <= 0 || value === NaN) {
      console.log('sdfsd');
    } else {
      dispatch(decrementAction({UNID: currentItemUNID, value: value}));
    }
  }

  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>{ComponentsTexts.GRANULATES_COUNTER_NAME} {ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}</h3>

      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>

      <ButtonChoice
        onIncButtonClickHandler={incrementHandler}
        onDecButtonClickHandler={decrementHandler}
        choiseText={
          {
            plus: ComponentsTexts.GRANULATES_COUNTER_PLUS_BUTTON,
            minus: ComponentsTexts.GRANULATES_COUNTER_MINUS_BUTTON
          }
        }
      />

    </section>
  )
}

export default GranulatesCounter;
