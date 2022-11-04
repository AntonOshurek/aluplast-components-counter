import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppThunk } from '../../types/store-types';
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
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { increment, decrement, setNewSettings } = granulatesSlice.actions;

// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default granulatesSlice.reducer;
