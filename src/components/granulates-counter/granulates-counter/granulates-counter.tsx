import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//components
import { BasicCounter } from '../../counters';
//consts and variables
import { ComponentsTexts, GranulatesLogsNames, InputStatuses} from '../../../variables/variables';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { incrementAction, decrementAction, logAction } from '../../../store/slices/granulates-slice';
//styles
import '../granulates-counter.scss';
//API
import CounterApi from '../../../api/counter-api/counter-api';

const GranulatesCounter = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 100;
  const [value, setValue] = useState<number | null>(defaultCounterValue);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const counterApi = new CounterApi({dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction});

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const incrementHandler = (): void => {
    counterApi.incrementHandler(value, currentItemUNID, GranulatesLogsNames.COUNTER);
  };

  const decrementHandler = (): void => {
    counterApi.decrementHandler(value, currentItemUNID, GranulatesLogsNames.COUNTER);
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
      title={`${ComponentsTexts.GRANULATES_COUNTER_NAME} ${ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}`}
      onInputValueChangeHandler={onInputValueChangeHandler}
      value={value}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
      message={message}
      status={status}
    />
  );
};

export default GranulatesCounter;
