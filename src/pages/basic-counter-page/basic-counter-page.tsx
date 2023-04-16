import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//API
import { CounterApi } from '../../api';
//store
import { useAppDispatch } from '../../hooks/hooks';
//types
import type { SetMessageStateType, SetStatusStateType } from '../../types/set-state-actions';
import type { logNamesType } from '../../types/variables-types';
import type { IncrementActionType, DecrementActionType, LogActionType } from '../../types/action-types';
//variables and constans
import { InputStatuses } from '../../variables/variables';
//styles
import './basic-counter-page.scss';
import { BasicCounter } from '../../components/counters';

interface IBasicCounterPagePropsType {
  incrementAction: IncrementActionType,
  decrementAction: DecrementActionType,
  logAction: LogActionType,
  logName: logNamesType,
};

const BasicCounterPage = ({ incrementAction, decrementAction, logAction, logName }: IBasicCounterPagePropsType): JSX.Element => {
  const { UNID } = useParams();
  let currentItemUNID: string;

  if (UNID) {
    currentItemUNID = UNID.toString();
  } else {
    currentItemUNID = 'udefined';
  };

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 0;
  const [value, setValue] = useState<number | null>(defaultCounterValue);
  const [message, setMessage]: [string, SetMessageStateType] = useState('');
  const [status, setStatus]: [InputStatuses, SetStatusStateType] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const counterApi = new CounterApi({ dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction });

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const incrementHandler = (): void => {
    counterApi.incrementHandler(value, currentItemUNID, logName);
  };

  const decrementHandler = (): void => {
    counterApi.decrementHandler(value, currentItemUNID, logName);
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
    <BasicCounter
      onInputValueChangeHandler={onInputValueChangeHandler}
      value={value}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
      message={message}
      status={status}
    />
  );
};

export default BasicCounterPage;
