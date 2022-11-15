import type { BasicDataTypes, DataTypes, ItemsTypes } from "../types/data-types";

export const adaptDataForClient = (data: BasicDataTypes): DataTypes => {
  const dataForClient: DataTypes = {};
  data.map((item: ItemsTypes) => {
    dataForClient[item.UNID] = item;
  });
  return dataForClient;
};

