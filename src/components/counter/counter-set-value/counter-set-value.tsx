import { ChangeEvent } from 'react';

import './counter-set-value.scss';

interface CouterSetValueProps {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
}

const CounterSetValue = ({onInputChangeHandler, value}: CouterSetValueProps): JSX.Element => {

  return (
    <div className='counter-set-value'>
      <label className='counter-set-value__label'>
        Add
        <input className='counter-set-value__input' type="number"
          value={value ? value : ''}
          onChange={onInputChangeHandler}
        />
        kilos
      </label>
    </div>
  )
}

export default CounterSetValue;
