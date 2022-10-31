import { useState, ChangeEvent } from 'react';

import CounterAddedAmount from '../../counter/counter-added-amount/counter-added-amount';
import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterControlsAdd from '../../counter/counter-controls/counter-contols-add';

import '../granulates-counter.scss';

const GranulatesCounterContainer = (): JSX.Element => {

  const initialValue: number = 500;
  const initialAddedAmount: number = 77;
  const addedAmountTitle: string = 'One container - ';

  const [value, setValue] = useState<number>(initialValue);
  const [valueError, setValueError] = useState<string>('')
  const [addedAmount, setAddedAmount] = useState<number>(initialAddedAmount)

  const setError = (errorMessage: string): void => {
    setValueError(errorMessage);
    setTimeout(() => setValueError(''), 1000)
  }

  const onInputValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(+evt.target.value - addedAmount)
  }

  const onAddButtonClickHandler = (): void => {

    if(value === 0 || value === NaN) {
      setError('You can\'t add zero');
    } else {
      console.log(value - addedAmount)
      //Run Dispatch
      //Action
    }
  }

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAddedAmount(+evt.target.value)
  }

  return (
    <section className="granulates-counter granulates-counter--set-controls">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={addedAmountTitle}/>
      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>
      <CounterControlsAdd onButtonClickHandler={onAddButtonClickHandler} errorMessage={valueError}/>

    </section>
  )
}

export default GranulatesCounterContainer;
