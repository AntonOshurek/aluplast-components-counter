//types
import type { IAdaptedDataType, IDataType, IItemDataType } from '../types/data-types';

export const dataAdapter = (data: IDataType): IAdaptedDataType => {
  let adaptedData: IAdaptedDataType = {};

  data.map((item: IItemDataType) => {
    adaptedData[item.UNID] = item;
  });

  return adaptedData;
};
