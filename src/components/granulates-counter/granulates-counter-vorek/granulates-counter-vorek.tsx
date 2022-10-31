import { useState, ChangeEvent, useEffect } from 'react';

import CounterAddedAmount from '../../counter/counter-added-amount/counter-added-amount';
import CounterValue from '../../counter/counter-value/counter-value';
import CounterControlsPlus from '../../counter/counter-controls/counter-controls-plus';

import '../granulates-counter.scss';

const GranulatesCounterVorek = (): JSX.Element => {

  const initialValue: number = 1;
  const initialAddedAmount: number = 1;
  const addedAmountTitle: string = '1 click +';

  const [value, setValue] = useState<number>(initialValue)
  const [addedAmount, setAddedAmount] = useState<number>(initialAddedAmount)

  const increment = (): void => {
    setValue(() => value + addedAmount)
    // run Dispatch!
    //Action
  }

  const decrement = (): void => {
    setValue(() => value - addedAmount)
      // run Dispatch!
      //Action
  }

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAddedAmount(+evt.target.value);
  }

  useEffect(() => {
    setAddedAmount(initialAddedAmount)
  }, [value]);

  return (
    <section className='granulates-counter granulates-counter--set-controls'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={addedAmountTitle}/>
      <CounterValue value={value}/>
      <CounterControlsPlus onIncButtonClickHandler={increment} onDecButtonClickHandler={decrement}/>

    </section>
  )
}

export default GranulatesCounterVorek;
