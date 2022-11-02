import { ChangeEvent, useRef } from 'react'

import './counter-added-amount.scss';

interface CounterAddedAmountPropsType {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
  title: string,
}

const CounterAddedAmount = ({onInputChangeHandler, value, title}: CounterAddedAmountPropsType): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onInputKeydownListener = (evt: any) => {
    if(evt.keyCode === 13 || evt.keyCode === 'enter') {
      evt.preventDefault();

      if(inputEl.current !== null) {
        inputEl.current.blur();
      }
    }
  }

  return (
    <div className='counter-added-amount'>
      <label className='counter-added-amount__label'>
        {title}
        <input className='counter-added-amount__input' type="number"
          ref={inputEl}
          value={value ? value : ''}
          onChange={onInputChangeHandler}
          onKeyDown={onInputKeydownListener}
        />
      </label>
    </div>
  )
}

export default CounterAddedAmount;
