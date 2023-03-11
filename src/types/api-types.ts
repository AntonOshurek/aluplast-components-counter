import { DecrementActionType, IncrementActionType, LogActionType } from "./action-types";
import { SetMessageStateType, SetStatusStateType } from "./set-state-actions";
import { AppDispatchType } from "./store-types";

export interface IAbstractCounterApiConstructorType {
  dispatch: AppDispatchType;
  incrementAction: IncrementActionType;
  decrementAction?: DecrementActionType;
  setMessage: SetMessageStateType;
  setStatus: SetStatusStateType;
  logAction: LogActionType;
};
