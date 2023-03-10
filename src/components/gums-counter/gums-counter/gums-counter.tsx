import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//components
import { BasicCounter } from '../../counters';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { incrementAction, decrementAction, logAction } from '../../../store/slices/gums-slice';
//consts and variables
import { ComponentsTexts, GumsLogsNames, InputStatuses } from '../../../variables/variables';

const GumsCounter = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 100;
  const [value, setValue] = useState<number | null>(defaultCounterValue);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const incrementHandler = (): void => {
    if(value === null) {
      console.log('value === null ERROR');
      setStatus(InputStatuses.ERROR);
      setMessage('Nic nie wpisanę w pole!');
    } else if (value === 0) {
      console.log('value === ZERO');
      setStatus(InputStatuses.ERROR);
      setMessage('Nie można dodać/odjąć ZERO!');
    } else {
      dispatch(incrementAction({UNID: currentItemUNID, value: value}));
      dispatch(logAction({UNID: currentItemUNID, logName: GumsLogsNames.CHANGES, logValue: `+${value}kg`}));
      setStatus(InputStatuses.SUCCESS);
      setMessage('');
    };
  };

  const decrementHandler = (): void => {
    if(value === null) {
      console.log('value === null ERROR');
      setStatus(InputStatuses.ERROR);
      setMessage('Nic nie wpisanę w pole!');
    } else if (value === 0) {
      console.log('value === ZERO');
      setStatus(InputStatuses.ERROR);
      setMessage('Nie można dodać/odjąć ZERO!');
    } else {
      dispatch(decrementAction({UNID: currentItemUNID, value: value}));
      dispatch(logAction({UNID: currentItemUNID, logName: GumsLogsNames.CHANGES, logValue: `-${value}kg`}));
      setStatus(InputStatuses.SUCCESS);
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
    <BasicCounter
      title={`${ComponentsTexts.GUM_COUNTER_NAME} ${ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}`}
      onInputValueChangeHandler={onInputValueChangeHandler}
      value={value}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
      message={message}
      status={status}
    />
  );
};

export default GumsCounter;
