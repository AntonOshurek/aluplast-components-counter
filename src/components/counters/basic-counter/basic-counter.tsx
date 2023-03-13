//components
import { ButtonChoice } from '../../controls';
import { CounterSetValue } from '../../counter-controls';
//variables adn consts
import { ComponentsTexts, InputStatuses } from '../../../variables/variables';
//styles
import './basic-counter.scss';

interface IBasicCounterPropsType {
  onInputValueChangeHandler: (value: number | null) => void,
  value: number | null,
  incrementHandler: () => void,
  decrementHandler: () => void,
  message?: string,
  status?: InputStatuses,
};

const BasicCounter = ({ onInputValueChangeHandler, value, incrementHandler, decrementHandler, status, message}: IBasicCounterPropsType): JSX.Element => {
  return (
    <section className="basic-counter">
      <h3 className='visually-hidden'>Licznik</h3>

      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value} status={status} message={message}/>

      <ButtonChoice
        onIncButtonClickHandler={incrementHandler}
        onDecButtonClickHandler={decrementHandler}
        choiseText={
          {
            plus: ComponentsTexts.COUNTER_PLUS_BUTTON,
            minus: ComponentsTexts.COUNTER_MINUS_BUTTON
          }
        }
      />
    </section>
  );
};

export default BasicCounter;
