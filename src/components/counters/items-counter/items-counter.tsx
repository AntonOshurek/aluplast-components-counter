import { ChangeEvent } from 'react';
//components
import { ButtonChoice } from '../../controls';
import { CounterAddedAmount, CounterValue } from '../../counter-controls';
//variables and constants
import { ComponentsTexts } from '../../../variables/variables';
//styles
import './items-counter.scss';

interface IItemsCounterPropsType {
  title: string,
  onAddedAmountChangeHandler: (evt: ChangeEvent<HTMLInputElement>) => void,
  addedAmount: number,
  value: number,
  incrementHandler: () => void,
  decrementHandler: () => void,
};

const ItemsCounter = ({title, onAddedAmountChangeHandler, addedAmount, value, incrementHandler, decrementHandler}: IItemsCounterPropsType): JSX.Element => {

  console.log(title)
  return (
    <section className='items-counter items-counter--set-controls'>
    <h3 className='visually-hidden'>Licznik {title}</h3>

    <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={ComponentsTexts.ITEMS_COUNTER_ADDED_AMOUNT_TITLE}/>
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
