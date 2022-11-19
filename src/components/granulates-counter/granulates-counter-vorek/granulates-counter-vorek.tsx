import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//components
import { CounterAddedAmount, CounterValue } from '../../counter-controls';
import { ButtonChoice } from '../../controls';
//consts and variables
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { incrementAction, decrementAction } from '../../../store/slices/counter-slice';
import { SelectorGetGranulatesSettingsVorekWeight } from '../../../store/selectors/selectors';
//styles
import '../granulates-counter.scss';

const GranulatesCounterVorek = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID

  const dispatch = useAppDispatch();

  const initialAddedAmount: number = 1;
  const initialValue: number = 0;
  const basicVorekWeight = useAppSelector(SelectorGetGranulatesSettingsVorekWeight);

  const [addedAmount, setAddedAmount] = useState<number>(initialAddedAmount);
  const [value, setValue] = useState<number>(initialValue);

  const resetAddedAmount = (): void => {
    //before added value + addedAmount whe need reset this to default value
    if(addedAmount > 1) {
      setAddedAmount(initialAddedAmount)
    }
  }

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    if(+evt.target.value < 0) {
      //Create push notification about negatiove value!
      console.error('you cant sen negative value!')
    } else {
      setAddedAmount(+evt.target.value);
    }
  }

  const incrementHandler = (): void => {
    setValue(() => value + addedAmount)

    let recalcValue: number = addedAmount * basicVorekWeight;
    dispatch(incrementAction({UNID: currentItemUNID, value: recalcValue, logName: 'vorek'}));
  }

  const decrementHandler = (): void => {
    setValue(() => value - addedAmount)

    const recalcValue: number = addedAmount * basicVorekWeight;
    dispatch(decrementAction({UNID: currentItemUNID, value: recalcValue, logName: 'vorek'}));
  }

  //CHECK IT!!!!!
  useEffect(() => {
    resetAddedAmount();
  }, [value]);

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
            plus: ComponentsTexts.GRANULATES_COUNTER_PLUS_BUTTON,
            minus: ComponentsTexts.GRANULATES_COUNTER_MINUS_BUTTON
          }
        }
      />

    </section>
  )
}

export default GranulatesCounterVorek;
