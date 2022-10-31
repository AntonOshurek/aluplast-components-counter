import {ChangeEvent} from 'react'

import './counter-added-amount.scss';

interface CounterAddedAmountPropsType {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
  title: string,
}

const CounterAddedAmount = ({onInputChangeHandler, value, title}: CounterAddedAmountPropsType): JSX.Element => {
  return (
    <div className='counter-added-amount'>
      <label className='counter-added-amount__label'>
        {title}
        <input className='counter-added-amount__input' type="number"
          value={value ? value : ''}
          onChange={onInputChangeHandler}
        />
      </label>
    </div>
  )
}

export default CounterAddedAmount;
