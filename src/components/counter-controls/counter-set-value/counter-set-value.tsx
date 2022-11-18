import { ChangeEvent, useRef } from 'react';
//utils
import { onEscClickHandler } from '../../../utils/utils';
//styles
import './counter-set-value.scss';

interface CouterSetValueProps {
  onInputChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
}

const CounterSetValue = ({onInputChangeHandler, value}: CouterSetValueProps): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onInputKeydownListener = (evt: any) => {
    onEscClickHandler(evt, inputEl.current);
  }

  return (
    <div className='counter-set-value'>
      <label className='counter-set-value__label'>
        Dodać kilogramy
        <input className='counter-set-value__input' type="number"
          ref={inputEl}
          value={value ? value : ''}
          onChange={onInputChangeHandler}
          onKeyDown={onInputKeydownListener}
        />
      </label>
    </div>
  )
}

export default CounterSetValue;
