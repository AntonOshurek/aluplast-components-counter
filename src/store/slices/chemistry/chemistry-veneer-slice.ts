import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { chemistryVeneerState } from '../../state/chemistry-state/chemistry-veneer-state';
//types
import type { IIncDecActionParametrsType, ILogActionType } from '../../../types/action-types';
import type { AppThunk } from '../../../types/store-types';
import type { IItemDataType } from '../../../types/data-types';
//API
import { chemistryVeneerDataApi, chemistryVeneerStorageApi } from '../../../api';

export const chemistryVennerSlice = createSlice({
  name: 'chemistry-veneer',
  initialState: chemistryVeneerState,

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
      state.items = chemistryVeneerDataApi.getAdaptedData();
    },
  },
});

export const { clear, log, clearItem } = chemistryVennerSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistryVennerSlice.actions.increment(action));
      chemistryVeneerStorageApi.setItems(getState().chemistry.items);
    };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistryVennerSlice.actions.decrement(action));
      chemistryVeneerStorageApi.setItems(getState().chemistry.items);
    };

export const clearStoreAction =
  (): AppThunk =>
    (dispatch) => {
      dispatch(chemistryVennerSlice.actions.clear());
      chemistryVeneerStorageApi.setItems(chemistryVeneerDataApi.getAdaptedData());
    };

export const clearItemAction =
  (action: { id: string }): AppThunk =>
    (dispatch, getState) => {
      const newDefaultItem = chemistryVeneerDataApi.getDataItem(action.id);
      dispatch(chemistryVennerSlice.actions.clearItem(newDefaultItem));
      chemistryVeneerStorageApi.setItems(getState().chemistry.items);
    };

export const logAction =
  (action: ILogActionType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistryVennerSlice.actions.log(action));
      chemistryVeneerStorageApi.setItems(getState().chemistry.items);
    };


export default chemistryVennerSlice.reducer;
