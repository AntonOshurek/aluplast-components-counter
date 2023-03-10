import { ChangeEvent } from 'react';
import { ComponentsTexts } from '../../../variables/variables';
import { ButtonChoice } from '../../controls';
import { CounterAddedAmount, CounterValue } from '../../counter-controls';
import './items-counter.scss';

interface IItemsCounterPropsType {
  title: string,
  onAddedAmountChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  addedAmount: number,
  value: number,
  incrementHandler: () => void,
  decrementHandler: () => void,
}

const ItemsCounter = ({title, onAddedAmountChangeHandler, addedAmount, value, incrementHandler, decrementHandler}: IItemsCounterPropsType): JSX.Element => {
  console.log('items counter');
  return (
    <section className='items-counter items-counter--set-controls'>
    <h3 className='visually-hidden'>Licznik {title}</h3>

    <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={ComponentsTexts.GRANULATES_COUNTER_VOREK_ADDED_AMOUNT_TITLE}/>
    <CounterValue value={value}/>
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

export default ItemsCounter;
