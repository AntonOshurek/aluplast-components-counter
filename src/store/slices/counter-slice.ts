import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../types/store-types';
//data
// import { selectCount } from '../selectors/selectors';
import granulatesDataApi from '../../data-api/granulates-data-api';
import { granulatesState } from '../state/granulates-state';
//types
import { IGranulatesSettingsType } from '../../types/data-types';
//storage
import granulatesStorage from '../../storage-api/granulates-storage';

export const granulatesSlice = createSlice({
  name: 'granulates',
  initialState: granulatesState,

  reducers: {
    increment: (state, action: PayloadAction<{UNID: number, value: number}>) => {
      state.items[action.payload.UNID].amount = state.items[action.payload.UNID].amount + action.payload.value;
    },
    decrement: (state, action: PayloadAction<{UNID: number, value: number}>) => {
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

export const { increment, decrement, setNewSettings, resetSettingsToDefault, clear } = granulatesSlice.actions;

export const incrementToStore =
  (action: {UNID: number, value: number}): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));
    granulatesStorage.setItems(getState().granulates.items);
  };

export const decrementToStore =
  (action: {UNID: number, value: number}): AppThunk =>
  (dispatch, getState) => {
    dispatch(decrement(action));
    granulatesStorage.setItems(getState().granulates.items);
  };

export const clearStore =
  (): AppThunk =>
  (dispatch) => {
    dispatch(clear());
    granulatesStorage.setItems(granulatesDataApi.getDefaultData());
  };

export default granulatesSlice.reducer;
