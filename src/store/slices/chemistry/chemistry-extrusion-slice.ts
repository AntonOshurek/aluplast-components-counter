import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { chemistryExtrusionState } from '../../state/chemistry-state/chemistry-extrusion-state';
//types
import type { IIncDecActionParametrsType, ILogActionType } from '../../../types/action-types';
import type { AppThunk } from '../../../types/store-types';
import type { IItemDataType } from '../../../types/data-types';
//API
import { chemistryExtrusionDataApi, chemistryExtrusionStorageApi } from '../../../api';

export const chemistryExtrusionSlice = createSlice({
  name: 'chemistry-extrusion',
  initialState: chemistryExtrusionState,

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
      state.items = chemistryExtrusionDataApi.getAdaptedData();
    },
  },
});

export const { clear, log, clearItem } = chemistryExtrusionSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistryExtrusionSlice.actions.increment(action));
      chemistryExtrusionStorageApi.setItems(getState().chemistry.items);
    };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistryExtrusionSlice.actions.decrement(action));
      chemistryExtrusionStorageApi.setItems(getState().chemistry.items);
    };

export const clearStoreAction =
  (): AppThunk =>
    (dispatch) => {
      dispatch(chemistryExtrusionSlice.actions.clear());
      chemistryExtrusionStorageApi.setItems(chemistryExtrusionDataApi.getAdaptedData());
    };

export const clearItemAction =
  (action: { id: string }): AppThunk =>
    (dispatch, getState) => {
      const newDefaultItem = chemistryExtrusionDataApi.getDataItem(action.id);
      dispatch(chemistryExtrusionSlice.actions.clearItem(newDefaultItem));
      chemistryExtrusionStorageApi.setItems(getState().chemistry.items);
    };

export const logAction =
  (action: ILogActionType): AppThunk =>
    (dispatch, getState) => {
      dispatch(chemistryExtrusionSlice.actions.log(action));
      chemistryExtrusionStorageApi.setItems(getState().chemistry.items);
    };


export default chemistryExtrusionSlice.reducer;
