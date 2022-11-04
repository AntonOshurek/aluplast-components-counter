import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
//components
import CounterAddedAmount from '../../counter/counter-added-amount/counter-added-amount';
import CounterSetValue from '../../counter/counter-set-value/counter-set-value';
import ButtonAdd from '../../controls/button-add/button-add';
//consts and variables
import { ComponentsTexts } from '../../../variables/variables';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { increment } from '../../../store/slices/counter-slice';
import { getGranulatesSettingsContainerWeight } from '../../../store/selectors/selectors';
//styles
import '../granulates-counter.scss';

const GranulatesCounterContainer = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID

  const dispatch = useAppDispatch();

  const basicContainerWeight = useAppSelector(getGranulatesSettingsContainerWeight);
  const initialValue: number = 500;
  const addedAmountTitle: string = 'One container - ';

  const [addedAmount, setAddedAmount] = useState<number>(basicContainerWeight)
  const [value, setValue] = useState<number>(initialValue);
  const [valueError, setValueError] = useState<string>('')

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAddedAmount(+evt.target.value)
  }

  const onInputValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(+evt.target.value)
  }

  const setError = (errorMessage: string): void => {
    setValueError(errorMessage);
    setTimeout(() => setValueError(''), 1000)
  }

  const onAddButtonClickHandler = (): void => {
    if(value <= 0 || value === NaN) {
      setError('You can\'t add zero');
    } else {
      const recalcValue = value - addedAmount
      setAddedAmount(basicContainerWeight);
      dispatch(increment({UNID: currentItemUNID, value: recalcValue}));
    }
  }

  return (
    <section className="granulates-counter granulates-counter--set-controls">
      <h3 className='visually-hidden'>GranulatesCounter</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={addedAmountTitle}/>
      <CounterSetValue onInputChangeHandler={onInputValueChangeHandler} value={value}/>
      <ButtonAdd
        onButtonClickHandler={onAddButtonClickHandler}
        errorMessage={valueError}
        buttonText={ComponentsTexts.GRANULATES_COUNTER_ADD_BUTTON}
      />

    </section>
  )
}

export default GranulatesCounterContainer;
