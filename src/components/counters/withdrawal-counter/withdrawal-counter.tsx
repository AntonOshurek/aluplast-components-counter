import { ChangeEvent } from 'react';
//components
import { ButtonAdd } from '../../controls';
import { CounterAddedAmount, CounterSetValue } from '../../counter-controls';
//variables and constants
import { ComponentsTexts, InputStatuses } from '../../../variables/variables';
//styles
import './withdrawal-counter.scss';

interface IWithdrwalCounterPropsType {
  title: string,
  onAddedAmountChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  addedAmount: number,
  onInputValueChangeHandler: (value: number | null) => void,
  incrementHandler: () => void,
  value: number | null,
  message?: string,
  status?: InputStatuses,
};

const WithdrwalCounter = ({title, onAddedAmountChangeHandler, incrementHandler, addedAmount, onInputValueChangeHandler, value, message, status }: IWithdrwalCounterPropsType): JSX.Element => {
  return (
    <section className="withdrawal-counter withdrawal-counter--set-controls">
    <h3 className='visually-hidden'>Licznik {title}</h3>

    <CounterAddedAmount
      onInputChangeHandler={onAddedAmountChangeHandler}
      value={addedAmount}
      title={ComponentsTexts.PIGMENTS_COUNTER_CONTAINER_ADDED_AMOUNT_TITLE}
    />

    <CounterSetValue
      onInputChangeHandler={onInputValueChangeHandler}
      value={value}
      status={status}
      message={message}
    />

    <ButtonAdd
      onButtonClickHandler={incrementHandler}
      buttonText={ComponentsTexts.COUNTER_ADD_BUTTON}
    />

  </section>
  );
};

export default WithdrwalCounter;
