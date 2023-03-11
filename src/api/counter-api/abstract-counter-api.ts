//variables and consts
import { InputStatuses } from "../../variables/variables";
import { logNamesType } from '../../variables/variables';
//types
import type { AppDispatchType } from "../../types/store-types";
import type { IncrementActionType, DecrementActionType, LogActionType } from '../../types/action-types';
import type { SetMessageStateType, SetStatusStateType } from '../../types/set-state-actions';
import type { IAbstractCounterApiConstructorType } from "../../types/api-types";

abstract class AbstractCounterApi {
  private dispatch: AppDispatchType;
  private incrementAction: IncrementActionType;
  private decrementAction?: DecrementActionType;
  private setMessage: SetMessageStateType;
  private setStatus: SetStatusStateType;
  private logAction: LogActionType;

  constructor (
      { dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction }: IAbstractCounterApiConstructorType,
    ) {
    this.dispatch = dispatch;
    this.incrementAction = incrementAction;

    if(decrementAction) {
      this.decrementAction = decrementAction;
    };

    this.setMessage = setMessage;
    this.setStatus = setStatus;
    this.logAction = logAction;
  };

  incrementHandler(value: number | null, currentItemUNID: number, logName: logNamesType): boolean {
    if(value === null) {
      this.setStatus(InputStatuses.ERROR);
      this.setMessage('Nic nie wpisanę w pole!');
      return false;
    } else if (value === 0) {
      this.setStatus(InputStatuses.ERROR);
      this.setMessage('Nie można dodać/odjąć ZERO!');
      return false;
    } else {
      this.dispatch(this.incrementAction({UNID: currentItemUNID, value: value}));
      this.dispatch(this.logAction({UNID: currentItemUNID, logName: logName, logValue: `+${value}kg`}));
      this.setStatus(InputStatuses.SUCCESS);
      this.setMessage('');
      return true;
    };
  };

  decrementHandler(value: number | null, currentItemUNID: number, logName: logNamesType): boolean {
    if(this.decrementAction) {
      if(value === null) {
        this.setStatus(InputStatuses.ERROR);
        this.setMessage('Nic nie wpisanę w pole!');
        return false;
      } else if (value === 0) {
        this.setStatus(InputStatuses.ERROR);
        this.setMessage('Nie można dodać/odjąć ZERO!');
        return false;
      } else {
        this.dispatch(this.decrementAction({UNID: currentItemUNID, value: value}));
        this.dispatch(this.logAction({UNID: currentItemUNID, logName: logName, logValue: `-${value}kg`}));
        this.setStatus(InputStatuses.SUCCESS);
        this.setMessage('');
        return true;
      };
    } else {
      throw new Error('decrementAction in CounterApi class is not avilabel, because class not have decrementAction function!')
    };
  };
};

export default AbstractCounterApi;
