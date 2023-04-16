import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//API
import { CounterApi } from "../../api";
//components
import { WithdrwalCounter } from "../../components/counters";
//store
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { SetMessageStateType, SetStatusStateType } from "../../types/set-state-actions";
//types
import type { IncrementActionType, LogActionType } from "../../types/action-types";
import type { GetSettingsWithdrawalCountType } from "../../types/selectors-types";
import type { logNamesType } from "../../types/variables-types";
//variables and constants
import { InputStatuses } from "../../variables/variables";

interface IWithdrawalCounterPagePropsType {
  counterName: string,
  incrementAction: IncrementActionType,
  logAction: LogActionType,
  logName: logNamesType,
  getSettingsWithdrawalCount: GetSettingsWithdrawalCountType,
};

const WithdrawalCounterPage = ({ counterName, incrementAction, logAction, logName, getSettingsWithdrawalCount }: IWithdrawalCounterPagePropsType): JSX.Element => {
  const { UNID } = useParams();
  // const currentItemUNID = +UNID;

  let currentItemUNID: string;

  if (UNID) {
    currentItemUNID = UNID.toString();
  } else {
    currentItemUNID = 'udefined';
  };

  const dispatch = useAppDispatch();

  const basicContainerWeight = useAppSelector(getSettingsWithdrawalCount);
  const initialValue: number = 500;

  const [addedAmount, setAddedAmount] = useState<number>(basicContainerWeight);
  const [value, setValue] = useState<number | null>(initialValue);
  const [message, setMessage]: [string, SetMessageStateType] = useState('');
  const [status, setStatus]: [InputStatuses, SetStatusStateType] = useState<InputStatuses>(InputStatuses.DEFAULT);

  const counterApi = new CounterApi({ dispatch, incrementAction, setMessage, setStatus, logAction });

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    console.log(`new addedAmount = ${+evt.target.value}`);
    setAddedAmount(+evt.target.value);
  };

  const onInputValueChangeHandler = (value: number | null): void => {
    setValue(value);
  };

  const onAddButtonClickHandler = (): void => {
    if (value) {
      const withdrawalValue = value - addedAmount;
      counterApi.incrementHandler(withdrawalValue, currentItemUNID, logName);
    } else {
      setStatus(InputStatuses.ERROR);
      setMessage('Nie można dodać 0');
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
    <WithdrwalCounter
      title={counterName}
      onAddedAmountChangeHandler={onAddedAmountChangeHandler}
      addedAmount={addedAmount}
      onInputValueChangeHandler={onInputValueChangeHandler}
      incrementHandler={onAddButtonClickHandler}
      value={value}
      message={message}
      status={status}
    />
  );
};

export default WithdrawalCounterPage;
