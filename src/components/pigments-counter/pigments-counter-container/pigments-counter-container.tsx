import { useState, ChangeEvent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//components
import { CounterAddedAmount, CounterSetValue } from '../../counter-controls';
import { ButtonAdd } from '../../controls';
//consts and variables
import { ComponentsTexts, PigmentsLogsNames, InputStatuses } from '../../../variables/variables';
//store
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { incrementAction, logAction } from '../../../store/slices/pigments-slice';
import { SelectorGetPigmentsSettingsContainerWeight } from '../../../store/selectors/selectors';
//types
import type { SetMessageStateType, SetStatusStateType } from '../../../types/set-state-actions';
//API
import CounterApi from '../../../api/counter-api/counter-api';
//styles
import '../pigments-counter.scss';

const PigmentsCounterContainer = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const basicContainerWeight = useAppSelector(SelectorGetPigmentsSettingsContainerWeight);
  const initialValue: number = 500;

  const [addedAmount, setAddedAmount] = useState<number>(basicContainerWeight);
  const [value, setValue] = useState<number | null>(initialValue);
  const [message, setMessage]: [string, SetMessageStateType] = useState('');
  const [status, setStatus]: [InputStatuses, SetStatusStateType] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const counterApi = new CounterApi({dispatch, incrementAction, setMessage, setStatus, logAction});

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setAddedAmount(+evt.target.value);
  };

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const onAddButtonClickHandler = (): void => {
    counterApi.incrementHandler(value, currentItemUNID, PigmentsLogsNames.CONTAINER);
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
    <section className="pigments-counter pigments-counter--set-controls">
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

export default PigmentsCounterContainer;
