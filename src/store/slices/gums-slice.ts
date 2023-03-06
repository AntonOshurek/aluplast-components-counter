import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { gumsState } from '../state/gums-state';

export const gumsSlice = createSlice({
  name: 'gums',
  initialState: gumsState,

  reducers: {
    // increment: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
    //   const {UNID, value} = action.payload;
    //   state.items[UNID].amount = state.items[UNID].amount + value;
    // },
    // decrement: (state, action: PayloadAction<IIncDecActionParametrsType>) => {
    //   const {UNID, value} = action.payload;
    //   state.items[UNID].amount = state.items[UNID].amount - value;
    // },
    // log: (state, action: PayloadAction<ILogActionType>) => {
    //   const {UNID, logName, logValue} = action.payload;
    //   state.items[UNID].logs[logName] = [...state.items[UNID].logs[logName], logValue];
    // },
    // clearItem: (state, action: PayloadAction<ItemsTypes>) => {
    //   const {UNID} = action.payload;
    //   state.items[UNID] = action.payload;
    // },
    // clear: (state) => {
    //   state.items = granulatesDataApi.getDefaultData();
    // }
  },
});

// export const { clear, clearItem, log } = gumsSlice.actions;


export default gumsSlice.reducer;
