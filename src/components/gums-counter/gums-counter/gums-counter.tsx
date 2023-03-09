import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
//components
import { ButtonChoice } from '../../controls';
import { CounterSetValue } from '../../counter-controls';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { incrementAction, decrementAction } from '../../../store/slices/gums-slice';
//consts and variables
import { ComponentsTexts } from '../../../variables/variables';
//styles
import './gums-counter.scss';

const GumsCounter = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  console.log(currentItemUNID)

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 100;

  const [value, setValue] = useState<number>(defaultCounterValue);

  const onInputValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(+evt.target.value)
  };

  const incrementHandler = (): void => {
    if(value <= 0 || typeof(value) !== "number") {
      console.log('sdfsd');
    } else {
      dispatch(incrementAction({UNID: currentItemUNID, value: value}));
      // dispatch(logAction({UNID: currentItemUNID, logName: GranulatesLogsNames.COUNTER, logValue: `+${value}kg`}))
    };
  };

  const decrementHandler = (): void => {
    if(value <= 0 || typeof(value) !== "number") {
      console.log('sdfsd');
    } else {
      dispatch(decrementAction({UNID: currentItemUNID, value: value}));
      // dispatch(logAction({UNID: currentItemUNID, logName: GranulatesLogsNames.COUNTER, logValue: `-${value}kg`}))
    };
  };

  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>{ComponentsTexts.GUM_COUNTER_NAME} {ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}</h3>

      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>

      <ButtonChoice
        onIncButtonClickHandler={incrementHandler}
        onDecButtonClickHandler={decrementHandler}
        choiseText={
          {
            plus: ComponentsTexts.COUNTER_PLUS_BUTTON,
            minus: ComponentsTexts.COUNTER_MINUS_BUTTON
          }
        }
      />

    </section>
  );
};

export default GumsCounter;
