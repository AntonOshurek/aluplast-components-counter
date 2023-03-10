import { useEffect, useRef, useState } from 'react';
//utils
import { onEscClickHandler } from '../../../utils/utils';
//variables and consts
import { InputStatuses } from '../../../variables/variables';
//styles
import './counter-set-value.scss';

interface CouterSetValueProps {
  onInputChangeHandler: (value: number | null) => void,
  value: number | null,
  message?: string,
  status?: InputStatuses,
}

const CounterSetValue = ({onInputChangeHandler, value, message, status}: CouterSetValueProps): JSX.Element => {
  const inputEl = useRef<HTMLInputElement>(null);

  const onInputKeydownListener = (evt: any) => {
    onEscClickHandler(evt, inputEl.current);
  };

  const [inputValue, setInputValue] = useState<number | string>(value?.toString() ?? '');
  const [inputClassName, setInputClassName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim();
    setInputValue(newValue);

    if (newValue === '') {
      onInputChangeHandler(null);
    } else {
      onInputChangeHandler(parseFloat(newValue) || 0);
    };
  };

  useEffect(() => {
    switch(status) {
      case InputStatuses.ERROR:
        setInputClassName('counter-set-value__label--error');
        break;
      case InputStatuses.SUCCESS:
        setInputClassName('counter-set-value__label--success');
        break;
      default:
        setInputClassName('');
        break;
    };
  }, [status]);

  return (
    <div className='counter-set-value'>
      <label className={`counter-set-value__label ${inputClassName}`}>
        Dodać kilogramy
        <span className='counter-set-value__message'>{message ? message : null}</span>
        <input className={`counter-set-value__input`} type="number"
          ref={inputEl}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={onInputKeydownListener}
        />
      </label>
    </div>
  )
}

export default CounterSetValue;
