import { ChangeEvent } from 'react';
//components
import { ButtonChoice } from '../../controls';
import { CounterSetValue } from '../../counter-controls';
//variables adn consts
import { ComponentsTexts } from '../../../variables/variables';
//styles
import './basic-counter.scss';

interface IBasicCounterPropsType {
  title: string,
  onInputValueChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  value: number,
  incrementHandler: () => void,
  decrementHandler: () => void,
}

const BasicCounter = ({title, onInputValueChangeHandler, value, incrementHandler, decrementHandler}: IBasicCounterPropsType): JSX.Element => {
  console.log('basic counter');
  return (
    <section className="basic-counter">
      <h3 className='visually-hidden'>{title}</h3>

      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>

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
