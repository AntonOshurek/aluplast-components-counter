import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../types/store-types';
// import { selectCount } from '../selectors/selectors';
import { granulatesState } from '../state/granulates-state';
import { GranulatesSettingsType } from '../../types/data-types';

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
    setNewSettings: (state, action: PayloadAction<GranulatesSettingsType>) => {
      state.granulatesSettings = action.payload;
    },
    resetSettingsToDefault: (state) => {
      state.granulatesSettings = granulatesState.granulatesSettings;
    }
  },
});

export const { increment, decrement, setNewSettings, resetSettingsToDefault } = granulatesSlice.actions;

export const incrementToStore =
  (action: {UNID: number, value: number}): AppThunk =>
  (dispatch, getState) => {
    dispatch(increment(action));
    localStorage.setItem('granulates', JSON.stringify(getState().granulates.items))
    console.log(getState())
  };

export default granulatesSlice.reducer;
