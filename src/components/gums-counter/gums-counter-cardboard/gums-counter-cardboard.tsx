import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { SelectorGetGranulatesSettingsVorekWeight } from '../../../store/selectors/selectors';
import { decrementAction, incrementAction, logAction } from '../../../store/slices/gums-slice';
import { ComponentsTexts, GumsLogsNames } from '../../../variables/variables';
import { ButtonChoice } from '../../controls';
import { CounterAddedAmount, CounterValue } from '../../counter-controls';
//styles
import './gums-counter-cardboard.scss';

const GumsCounterCardboard = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const initialAddedAmount: number = 1;
  const initialValue: number = 0;
  // const basicVorekWeight = useAppSelector(SelectorGetGranulatesSettingsVorekWeight);
  const basicVorekWeight = 500;

  const [addedAmount, setAddedAmount] = useState<number>(initialAddedAmount);
  const [value, setValue] = useState<number>(initialValue);

  const resetAddedAmount = (): void => {
    //before added value + addedAmount whe need reset this to default value
    if(addedAmount > 1) {
      setAddedAmount(initialAddedAmount)
    };
  };

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    if(+evt.target.value < 0) {
      //Create push notification about negatiove value!
      console.error('you cant sen negative value!')
    } else {
      setAddedAmount(+evt.target.value);
    };
  };

  const incrementHandler = (): void => {
    setValue((prev) => prev + addedAmount)

    let recalcValue: number = addedAmount * basicVorekWeight;
    dispatch(incrementAction({UNID: currentItemUNID, value: recalcValue}));
  };

  const decrementHandler = (): void => {
    setValue((prev) => prev - addedAmount)

    const recalcValue: number = addedAmount * basicVorekWeight;
    dispatch(decrementAction({UNID: currentItemUNID, value: recalcValue}));
  };

  const ref = useRef(0);

  //CHECK IT!!!!!
  useEffect(() => {
    resetAddedAmount();
    ref.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      if(ref.current !== 0) {
        dispatch(logAction({UNID: currentItemUNID, logName: GumsLogsNames.CHANGES, logValue: `+${ref.current} karton`}));
      }
    }
  }, []);

  return (
    <section className='granulates-counter granulates-counter--set-controls'>
      <h3 className='visually-hidden'>Licznik {ComponentsTexts.GRANULATES_COUNTER_NAME} {ComponentsTexts.GRANULATES_COUNTER_VOREK_NAME}</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={ComponentsTexts.GRANULATES_COUNTER_VOREK_ADDED_AMOUNT_TITLE}/>
      <CounterValue value={value}/>
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

export default GumsCounterCardboard;
