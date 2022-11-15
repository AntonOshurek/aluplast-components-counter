import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../types/store-types';
//data
import granulatesDataApi from '../../data-api/granulates-data-api';
import { granulatesState } from '../state/granulates-state';
//types
import type { IGranulatesSettingsType } from '../../types/data-types';
import type { IIncDecActionParametrsType } from '../../types/action-types';

//storage
import granulatesStorage from '../../storage-api/granulates-storage';

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
    resetSettingsToDefault: (state) => {
      state.granulatesSettings = granulatesDataApi.getSettings();
    },
    clear: (state) => {
      state.items = granulatesDataApi.getDefaultData();
    }
  },
});

export const { resetSettingsToDefault, clear } = granulatesSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.increment(action));
    granulatesStorage.setItems(getState().granulates.items);
  };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.decrement(action));
    granulatesStorage.setItems(getState().granulates.items);
  };

export const clearStoreAction =
  (): AppThunk =>
  (dispatch) => {
    dispatch(granulatesSlice.actions.clear());
    granulatesStorage.setItems(granulatesDataApi.getDefaultData());
  };

export const setSettingsAction =
  (action: IGranulatesSettingsType): AppThunk =>
  (dispatch, getState) => {
    dispatch(granulatesSlice.actions.setNewSettings(action));
    //add save settings to store logick
    //granulatesStorage.setItems(getState().granulates.items);
  };

export default granulatesSlice.reducer;
