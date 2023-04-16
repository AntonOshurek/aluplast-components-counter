//types
import type { IAdaptedDataType, IDataType, IItemDataType } from '../types/data-types';

class DataAdapters {
  adaptStandsrtData(data: IDataType): IAdaptedDataType {
    let adaptedData: IAdaptedDataType = {};

    data.map((item: IItemDataType): void => {
      adaptedData[item.UNID] = item;
    });

    return adaptedData;
  };
};

const dataAdapters = new DataAdapters();

export default dataAdapters;
