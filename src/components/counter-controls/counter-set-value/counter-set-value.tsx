import { ChangeEvent, useRef } from 'react';

import './counter-set-value.scss';

interface CouterSetValueProps {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
}

const CounterSetValue = ({onInputChangeHandler, value}: CouterSetValueProps): JSX.Element => {
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
    <div className='counter-set-value'>
      <label className='counter-set-value__label'>
        Add
        <input className='counter-set-value__input' type="number"
          ref={inputEl}
          value={value ? value : ''}
          onChange={onInputChangeHandler}
          onKeyDown={onInputKeydownListener}
        />
        kilos
      </label>
    </div>
  )
}

export default CounterSetValue;
