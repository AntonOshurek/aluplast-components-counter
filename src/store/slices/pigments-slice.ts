import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//data
import { pigmentsState } from '../state/pigments-state';
//types
import type { AppThunk } from '../../types/store-types';
import type { IPigmentsSettingsType, IItemDataType } from '../../types/data-types';
import type { IIncDecActionParametrsType, ILogActionType } from '../../types/action-types';
//API
import { pigmentsDataApi, pigmentsStorageApi } from '../../api';

export const pigmentsSlice = createSlice({
  name: 'pigments',
  initialState: pigmentsState,

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
    setNewSettings: (state, action: PayloadAction<IPigmentsSettingsType>) => {
      state.pigmentsSettings = action.payload;
    },
    clearItem: (state, action: PayloadAction<IItemDataType>) => {
      const { UNID } = action.payload;
      state.items[UNID] = action.payload;
    },
    clear: (state) => {
      state.items = pigmentsDataApi.getAdaptedData();
    }
  },
});

export const { clear, clearItem, log } = pigmentsSlice.actions;

export const incrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(pigmentsSlice.actions.increment(action));
      pigmentsStorageApi.setItems(getState().pigments.items);
    };

export const decrementAction =
  (action: IIncDecActionParametrsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(pigmentsSlice.actions.decrement(action));
      pigmentsStorageApi.setItems(getState().pigments.items);
    };

export const clearStoreAction =
  (): AppThunk =>
    (dispatch) => {
      dispatch(pigmentsSlice.actions.clear());
      pigmentsStorageApi.setItems(pigmentsDataApi.getAdaptedData());
    };

export const clearItemAction =
  (action: { id: string }): AppThunk =>
    (dispatch, getState) => {
      const newDefaultItem = pigmentsDataApi.getDataItem(action.id)
      dispatch(pigmentsSlice.actions.clearItem(newDefaultItem));
      pigmentsStorageApi.setItems(getState().pigments.items);
    };

export const setSettingsAction =
  (action: IPigmentsSettingsType): AppThunk =>
    (dispatch, getState) => {
      dispatch(pigmentsSlice.actions.setNewSettings(action));
      pigmentsStorageApi.setSettings(getState().pigments.pigmentsSettings);
    };

export const logAction =
  (action: ILogActionType): AppThunk =>
    (dispatch, getState) => {
      dispatch(pigmentsSlice.actions.log(action));
      pigmentsStorageApi.setItems(getState().pigments.items);
    };

export default pigmentsSlice.reducer;
