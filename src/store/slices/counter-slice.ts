import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../../types/store-types';
import { selectCount } from '../selectors/selectors';
import { counterState } from '../state/counter-state';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;