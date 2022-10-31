import { useState, ChangeEvent } from 'react';

import { useParams } from 'react-router-dom';

import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import CounterControlsAdd from '../../counter/counter-controls/counter-contols-add';

import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { granulatesStateSelector } from '../../../store/selectors/selectors';
import { increment, decrement } from '../../../store/slices/counter-slice';

// import { GranulateItemType } from '../../../types/data-types';

import '../granulates-counter.scss';

// interface GranulatesCounterPropsType {
//   currentItem: GranulateItemType
// }

const GranulatesCounter = (): JSX.Element => {

  const {UNID = 100} = useParams();
  const foo = +UNID

  const {amount, name} = useAppSelector(granulatesStateSelector)[foo];
  const dispatch = useAppDispatch();

  // console.log(amount)
  // console.log(name)


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

      dispatch(increment({UNID: foo, value: value}));
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
