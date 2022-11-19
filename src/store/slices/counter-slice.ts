import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { granulatesState } from '../state/granulates-state';
//types
import type { AppThunk } from '../../types/store-types';
import type { IGranulatesSettingsType } from '../../types/data-types';
import type { IIncDecActionParametrsType } from '../../types/action-types';
//API
import { granulatesDataApi, granulatesStorageApi } from '../../api/';

export const granulatesSlice = createSlice({
  name: 'granulates',
  initialState: granulatesState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      state.items[action.payload.UNID].amount = state.items[action.payload.UNID].amount + action.payload.value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
      state.items[action.payload.UNID].amount = state.items[action.payload.UNID].amount - action.payload.value;
    },
    setNewSettings: (state, action: PayloadAction<IGranulatesSettingsType>) => {
      state.granulatesSettings = action.payload;
    },
    clear: (state) => {
      state.items = granulatesDataApi.getDefaultData();
    }
  },
});

export const { clear } = granulatesSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.increment(action));
    granulatesStorageApi.setItems(getState().granulates.items);
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.decrement(action));
    granulatesStorageApi.setItems(getState().granulates.items);
  };

export const clearStoreAction =
  (): AppThunk =>
  (dispatch) => {
    dispatch(granulatesSlice.actions.clear());
    granulatesStorageApi.setItems(granulatesDataApi.getDefaultData());
  };

export const setSettingsAction =
  (action: IGranulatesSettingsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.setNewSettings(action));
    granulatesStorageApi.setSettings(getState().granulates.granulatesSettings);
  };

export default granulatesSlice.reducer;
