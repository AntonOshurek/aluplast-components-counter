import { Dispatch, SetStateAction } from 'react';
//variables and consts
import { InputStatuses } from "../../variables/variables";
//types
import type { AppDispatchType } from "../../hooks/hooks";
import { IIncDecActionParametrsType, ILogActionType } from '../../types/action-types';
import { AppThunk } from '../../types/store-types';
import { logNamesType } from '../../variables/variables';

// Define the type for the setMessage function
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

abstract class AbstractCounterApi {
  private dispatch: AppDispatchType;
  private incrementAction: IncrementActionType;
  private decrementAction?: DecrementActionType;
  private setMessage: SetMessage;
  private setStatus: SetStatus;
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
    console.log('incrementHandler');

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
      this.setMessage('');
      return true;
    };
  };

  decrementHandler(value: number | null, currentItemUNID: number, logName: logNamesType): boolean {
    console.log('decrementHandler');

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
