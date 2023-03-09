import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { gumsState } from '../state/gums-state';
//types
import type { IIncDecActionParametrsType } from '../../types/action-types';
import type { AppThunk } from '../../types/store-types';
//API
import { gumsDataApi, gumsStorageApi } from '../../api';

export const gumsSlice = createSlice({
  name: 'gums',
  initialState: gumsState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const {UNID, value} = action.payload;
      state.items[UNID].amount = state.items[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const {UNID, value} = action.payload;
      state.items[UNID].amount = state.items[UNID].amount - value;
    },
    // log: (state, action: PayloadAction<ILogActionType>) => {
    //   const {UNID, logName, logValue} = action.payload;
    //   state.items[UNID].logs[logName] = [...state.items[UNID].logs[logName], logValue];
    // },
    // clearItem: (state, action: PayloadAction<ItemsTypes>) => {
    //   const {UNID} = action.payload;
    //   state.items[UNID] = action.payload;
    // },
    clear: (state) => {
      state.items = gumsDataApi.getAdaptedData();
    }
  },
});

// export const { clear, clearItem, log } = gumsSlice.actions;
export const { clear} = gumsSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(gumsSlice.actions.increment(action));
    gumsStorageApi.setItems(getState().gums.items);
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(gumsSlice.actions.decrement(action));
    gumsStorageApi.setItems(getState().gums.items);
  };

export const clearStoreAction =
  (): AppThunk =>
  (dispatch) => {
    dispatch(gumsSlice.actions.clear());
    gumsStorageApi.setItems(gumsDataApi.getAdaptedData());
  };


export default gumsSlice.reducer;
