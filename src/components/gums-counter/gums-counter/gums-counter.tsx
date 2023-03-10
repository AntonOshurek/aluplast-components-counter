import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
//components
import { BasicCounter } from '../../counters';
//store
import { useAppDispatch } from '../../../hooks/hooks';
import { incrementAction, decrementAction, logAction } from '../../../store/slices/gums-slice';
//consts and variables
import { ComponentsTexts, GumsLogsNames } from '../../../variables/variables';

const GumsCounter = (): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const defaultCounterValue: number = 100;
  const [value, setValue] = useState<number>(defaultCounterValue);

  const onInputValueChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setValue(+evt.target.value)
  };

  const incrementHandler = (): void => {
    if(value <= 0 || typeof(value) !== "number") {
      console.log('sdfsd');
    } else {
      dispatch(incrementAction({UNID: currentItemUNID, value: value}));
      dispatch(logAction({UNID: currentItemUNID, logName: GumsLogsNames.CHANGES, logValue: `+${value}kg`}))
    };
  };

  const decrementHandler = (): void => {
    if(value <= 0 || typeof(value) !== "number") {
      console.log('sdfsd');
    } else {
      dispatch(decrementAction({UNID: currentItemUNID, value: value}));
      dispatch(logAction({UNID: currentItemUNID, logName: GumsLogsNames.CHANGES, logValue: `-${value}kg`}))
    };
  };

  return (
    <BasicCounter
      title={`${ComponentsTexts.GUM_COUNTER_NAME} ${ComponentsTexts.GRANULATES_COUNTER_BASIC_NAME}`}
      onInputValueChangeHandler={onInputValueChangeHandler}
      value={value}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
    />
  );
};

export default GumsCounter;
