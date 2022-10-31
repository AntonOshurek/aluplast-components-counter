import { useState, ChangeEvent, useEffect } from 'react';

import CounterSetControls from '../../counter/counter-set-controls/counter-set-controls';
import CounterValue from '../../counter/counter-value/counter-value';
import CounterControlsPlus from '../../counter/counter-controls/counter-controls-plus';

import '../granulates-counter.scss';

const GranulatesCounterVorek = (): JSX.Element => {

  const initialValue: number = 1;

  const [value, setValue] = useState<number>(initialValue)

  const increment = () => {
    setValue(() => value + 1)
  }

  const decrement = () => {
    setValue(() => value - 1)
  }

  useEffect(() => {
    console.log(value)
  }, [value]);

  return (
    <section className='granulates-counter granulates-counter--set-controls'>
      <h3 className='visually-hidden'>granulates counter vorek</h3>

      <CounterSetControls/>
      <CounterValue value={value}/>
      <CounterControlsPlus onIncButtonClickHandler={increment} onDecButtonClickHandler={decrement}/>

    </section>
  )
}

export default GranulatesCounterVorek;
