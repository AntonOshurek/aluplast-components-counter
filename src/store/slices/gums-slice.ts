import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { gumsState } from '../state/gums-state';
//types
import type { IIncDecActionParametrsType, ILogActionType } from '../../types/action-types';
import type { AppThunk } from '../../types/store-types';
import type { IItemDataType, IGumsSettingsType } from '../../types/data-types';
//API
import { gumsDataApi, gumsStorageApi } from '../../api';

export const gumsSlice = createSlice({
  name: 'gums',
  initialState: gumsState,

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
    setNewSettings: (state, action: PayloadAction<IGumsSettingsType>) => {
      state.gumsSettings = action.payload;
    },
    clearItem: (state, action: PayloadAction<IItemDataType>) => {
      const { UNID } = action.payload;
      state.items[UNID] = action.payload;
    },
    clear: (state) => {
      state.items = gumsDataApi.getAdaptedData();
    },
  },
});

export const { clear, log, clearItem } = gumsSlice.actions;

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

export const clearItemAction =
  (action: { id: string }): AppThunk =>
    (dispatch, getState) => {
      const newDefaultItem = gumsDataApi.getDataItem(action.id)
      dispatch(gumsSlice.actions.clearItem(newDefaultItem));
      gumsStorageApi.setItems(getState().gums.items);
    };

export const setSettingsAction =
  (action: IGumsSettingsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(gumsSlice.actions.setNewSettings(action));
      gumsStorageApi.setSettings(getState().gums.gumsSettings);
    };

export const logAction =
  (action: ILogActionType): AppThunk =>
    (dispatch, getState) => {
      dispatch(gumsSlice.actions.log(action));
      gumsStorageApi.setItems(getState().gums.items);
    };


export default gumsSlice.reducer;
