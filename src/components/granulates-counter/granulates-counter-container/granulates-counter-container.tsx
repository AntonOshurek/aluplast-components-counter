import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//components
import { CounterAddedAmount, CounterSetValue } from '../../counter-controls';
import { ButtonAdd } from '../../controls';
//consts and variables
import { ComponentsTexts, GranulatesLogsNames, InputStatuses } from '../../../variables/variables';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { incrementAction, logAction } from '../../../store/slices/granulates-slice';
import { SelectorGetGranulatesSettingsContainerWeight } from '../../../store/selectors/selectors';
//styles
import '../granulates-counter.scss';

const GranulatesCounterContainer = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const basicContainerWeight = useAppSelector(SelectorGetGranulatesSettingsContainerWeight);
  const initialValue: number = 500;

  const [addedAmount, setAddedAmount] = useState<number>(basicContainerWeight);
  const [value, setValue] = useState<number | null>(initialValue);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAddedAmount(+evt.target.value)
  };

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const onAddButtonClickHandler = (): void => {
    if(value === null) {
      console.log('value === null ERROR');
      setStatus(InputStatuses.ERROR);
      setMessage('Nic nie wpisanę w pole!');
    } else if (value === 0) {
      console.log('value === ZERO');
      setStatus(InputStatuses.ERROR);
      setMessage('Nie można dodać/odjąć ZERO!');
    } else {
      const recalcValue = value - addedAmount
      setAddedAmount(basicContainerWeight);
      dispatch(incrementAction({UNID: currentItemUNID, value: recalcValue}));
      dispatch(logAction({UNID: currentItemUNID, logName: GranulatesLogsNames.CONTAINER, logValue: `+${value}kg`}));
      setMessage('');
    };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(InputStatuses.DEFAULT);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [status]);

  return (
    <section className="granulates-counter granulates-counter--set-controls">
      <h3 className='visually-hidden'>Licznik {ComponentsTexts.GRANULATES_COUNTER_NAME} {ComponentsTexts.GRANULATES_COUNTER_CONTAINER_NAME}</h3>

      <CounterAddedAmount onInputChangeHandler={onAddedAmountChangeHandler} value={addedAmount} title={ComponentsTexts.GRANULATES_COUNTER_CONTAINER_ADDED_AMOUNT_TITLE}/>
      <CounterSetValue
        onInputChangeHandler={onInputValueChangeHandler}
        value={value}
        message={message}
        status={status}/>
      <ButtonAdd
        onButtonClickHandler={onAddButtonClickHandler}
        buttonText={ComponentsTexts.GRANULATES_COUNTER_ADD_BUTTON}
      />

    </section>
  );
};

export default GranulatesCounterContainer;
