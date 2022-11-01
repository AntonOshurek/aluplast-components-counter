import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import CounterAddedAmount from '../../counter/counter-added-amount/counter-added-amount';
import CounterValue from '../../counter/counter-value/counter-value';
import CounterControlsPlus from '../../counter/counter-controls/counter-controls-plus';

import { useAppDispatch } from '../../../hooks/hooks';
import { increment, decrement } from '../../../store/slices/counter-slice';

import '../granulates-counter.scss';

const GranulatesCounterVorek = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID

  const dispatch = useAppDispatch();

  const initialAddedAmount: number = 1;
  const initialValue: number = 0;
  const addedAmountTitle: string = '1 click +';
  const weightOfOneVorek: number = 25;

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

    let recalcValue: number = addedAmount * weightOfOneVorek;
    dispatch(increment({UNID: currentItemUNID, value: recalcValue}));
  }

  const decrementHandler = (): void => {
    setValue(() => value - addedAmount)

    const recalcValue: number = addedAmount * weightOfOneVorek;
    dispatch(decrement({UNID: currentItemUNID, value: recalcValue}));
  }

  //CHECK IT!!!!!
  useEffect(() => {
    resetAddedAmount();
  }, [value]);

  return (
    <section className='granulates-counter granulates-counter--set-controls'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={addedAmountTitle}/>
      <CounterValue value={value}/>
      <CounterControlsPlus onIncButtonClickHandler={incrementHandler} onDecButtonClickHandler={decrementHandler}/>

    </section>
  )
}

export default GranulatesCounterVorek;
