import { useState, ChangeEvent } from 'react';

import { useParams } from 'react-router-dom';

import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterControlsAdd from '../../counter/counter-controls/counter-contols-add';

import { useAppDispatch } from '../../../hooks/hooks';
import { increment } from '../../../store/slices/counter-slice';

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
    if(value <= 0 || value === NaN) {
      setError('You can\'t add zero');
    } else {
      dispatch(increment({UNID: currentItemUNID, value: value}));
    }
  }

  return (
    <section className="granulates-counter">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>
      <CounterControlsAdd onButtonClickHandler={onAddButtonClickHandler} errorMessage={valueError}/>

    </section>
  )
}

export default GranulatesCounter;
