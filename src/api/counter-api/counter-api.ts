import { Dispatch, SetStateAction } from "react";
import { AppDispatchType } from "../../hooks/hooks";
import { IIncDecActionParametrsType, ILogActionType } from "../../types/action-types";
import { AppThunk } from "../../types/store-types";
import { InputStatuses } from "../../variables/variables";
import AbstractCounterApi from "./abstract-counter-api";

type SetMessage = Dispatch<SetStateAction<string>>;
type SetStatus = Dispatch<SetStateAction<InputStatuses>>;
type IncrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
type DecrementActionType = (action: IIncDecActionParametrsType) => AppThunk;
type LogActionType = (action: ILogActionType) => AppThunk;

interface IAbstractCounterApiConstructorType {
  dispatch: AppDispatchType;
  incrementAction: IncrementActionType;
  decrementAction?: DecrementActionType;
  setMessage: SetMessage;
  setStatus: SetStatus;
  logAction: LogActionType;
};

class CounterApi extends AbstractCounterApi {
  constructor (
    { dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction }: IAbstractCounterApiConstructorType,
  ) {
    super({ dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction });
  };
};

export default CounterApi;
