import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsCounter } from "../../components/counters";
//store
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
//types
import type { GetItemVeightSelectorsType } from "../../types/selectors-types";
import type { IncrementActionType, DecrementActionType, LogActionType } from "../../types/action-types";
import { logNamesType } from "../../variables/variables";

interface IItemsCounterPagePropsType {
  counterName: string,
  getItemWeight: GetItemVeightSelectorsType,
  incrementAction: IncrementActionType,
  decrementAction: DecrementActionType,
  logAction: LogActionType,
  logName: logNamesType,
};

const ItemsCounterPage = ({counterName, getItemWeight, incrementAction, decrementAction, logAction, logName}: IItemsCounterPagePropsType): JSX.Element => {
  const {UNID = 100} = useParams();
  const currentItemUNID = +UNID;

  const dispatch = useAppDispatch();

  const initialAddedAmount: number = 1;
  const initialValue: number = 0;
  const basicItemWeight = useAppSelector(getItemWeight);

  const [addedAmount, setAddedAmount] = useState<number>(initialAddedAmount);
  const [value, setValue] = useState<number>(initialValue);

  const resetAddedAmount = (): void => {
    //before added value + addedAmount whe need reset this to default value
    if(addedAmount > 1) {
      setAddedAmount(initialAddedAmount);
    };
  };

  const onAddedAmountChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    if(+evt.target.value < 0) {
      //Create push notification about negatiove value!
      console.error('you cant sen negative value!');
    } else {
      setAddedAmount(+evt.target.value);
    };
  };

  const incrementHandler = (): void => {
    setValue((prev) => prev + addedAmount);

    let recalcValue: number = addedAmount * basicItemWeight;
    dispatch(incrementAction({UNID: currentItemUNID, value: recalcValue}));
  };

  const decrementHandler = (): void => {
    setValue((prev) => prev - addedAmount);

    const recalcValue: number = addedAmount * basicItemWeight;
    dispatch(decrementAction({UNID: currentItemUNID, value: recalcValue}));
  };

  const ref = useRef(0);

  //CHECK IT!!!!!
  useEffect(() => {
    resetAddedAmount();
    ref.current = value;
  }, [value]);

  useEffect(() => {
    return () => {
      if(ref.current !== 0) {
        dispatch(logAction({UNID: currentItemUNID, logName: logName, logValue: `+${ref.current} `}));
      }
    }
  }, []);

  return (
    <ItemsCounter
      title={counterName}
      onAddedAmountChangeHandler={onAddedAmountChangeHandler}
      addedAmount={addedAmount}
      value={value}
      incrementHandler={incrementHandler}
      decrementHandler={decrementHandler}
    />
  );
};

export default ItemsCounterPage;
