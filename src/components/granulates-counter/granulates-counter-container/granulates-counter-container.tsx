import { useState, ChangeEvent } from 'react';

import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';
import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterControlsAdd from '../../counter/counter-controls/counter-contols-add';

import '../granulates-counter.scss';

const GranulatesCounterContainer = (): JSX.Element => {

  const defaultCounterValue: number = 1;

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

    if(value === 0 || value === NaN) {
      setError('You can\'t add zero');
    } else {
      console.log(value)
    }
  }
  return (
    <section className="granulates-counter granulates-counter--set-controls">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterSetControls/>
      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>
      <CounterControlsAdd onButtonClickHandler={onAddButtonClickHandler} errorMessage={valueError}/>

    </section>
  )
}

export default GranulatesCounterContainer;
