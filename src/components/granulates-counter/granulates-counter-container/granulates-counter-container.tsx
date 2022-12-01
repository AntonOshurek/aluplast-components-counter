import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
//components
import { CounterAddedAmount, CounterSetValue } from '../../counter-controls';
import { ButtonAdd } from '../../controls';
//consts and variables
import { ComponentsTexts, GranulatesLogsNames } from '../../../variables/variables';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { incrementAction, log } from '../../../store/slices/counter-slice';
import { SelectorGetGranulatesSettingsContainerWeight } from '../../../store/selectors/selectors';
//styles
import '../granulates-counter.scss';

const GranulatesCounterContainer = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID

  const dispatch = useAppDispatch();

  const basicContainerWeight = useAppSelector(SelectorGetGranulatesSettingsContainerWeight);
  const initialValue: number = 500;

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
      dispatch(log({UNID: currentItemUNID, logName: GranulatesLogsNames.CONTAINER, logValue: `+${value}`}));
      dispatch(incrementAction({UNID: currentItemUNID, value: recalcValue}));
    }
  }

  return (
    <section className="granulates-counter granulates-counter--set-controls">
      <h3 className='visually-hidden'>Licznik {ComponentsTexts.GRANULATES_COUNTER_NAME} {ComponentsTexts.GRANULATES_COUNTER_CONTAINER_NAME}</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={ComponentsTexts.GRANULATES_COUNTER_CONTAINER_ADDED_AMOUNT_TITLE}/>
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
