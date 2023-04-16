import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { chemistryState } from '../state/chemistry-state';
//types
import type { IIncDecActionParametrsType, ILogActionType } from '../../types/action-types';
import type { AppThunk } from '../../types/store-types';
import type { IItemDataType } from '../../types/data-types';
//API
import { chemistryDataApi, chemistryStorageApi } from '../../api';

export const chemistrySlice = createSlice({
  name: 'chemistry',
  initialState: chemistryState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const { UNID, value } = action.payload;
      state.items[UNID].amount = state.items[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      const { UNID, value } = action.payload;
      state.items[UNID].amount = state.items[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogActionType>) => {
      const { UNID, logName, logValue } = action.payload;
      state.items[UNID].logs[logName] = [...state.items[UNID].logs[logName], logValue];
    },
    clearItem: (state, action: PayloadAction<IItemDataType>) => {
      const { UNID } = action.payload;
      state.items[UNID] = action.payload;
    },
    clear: (state) => {
      state.items = chemistryDataApi.getAdaptedData();
    },
  },
});

export const { clear, log, clearItem } = chemistrySlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistrySlice.actions.increment(action));
      chemistryStorageApi.setItems(getState().chemistry.items);
    };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistrySlice.actions.decrement(action));
      chemistryStorageApi.setItems(getState().chemistry.items);
    };

export const clearStoreAction =
  (): AppThunk =>
    (dispatch) => {
      dispatch(chemistrySlice.actions.clear());
      chemistryStorageApi.setItems(chemistryDataApi.getAdaptedData());
    };

export const clearItemAction =
  (action: { id: string }): AppThunk =>
    (dispatch, getState) => {
      const newDefaultItem = chemistryDataApi.getDataItem(action.id)
      dispatch(chemistrySlice.actions.clearItem(newDefaultItem));
      chemistryStorageApi.setItems(getState().chemistry.items);
    };

export const logAction =
  (action: ILogActionType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistrySlice.actions.log(action));
      chemistryStorageApi.setItems(getState().chemistry.items);
    };


export default chemistrySlice.reducer;
