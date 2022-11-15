//abstract classes
import AbstractData from "./abstract-data";
//types
import type { BasicGranulatesDataType, IGranulatesSettingsType } from "../../types/data-types";
//data
import { basicGranulatesData, basicGranulatesSettings } from "../../data/granulates-data";


class GranulatesDataApi extends AbstractData {
  constructor(data: BasicGranulatesDataType, settings: IGranulatesSettingsType) {
    super(data, settings);
  }
}

const granulatesDataApi = new GranulatesDataApi(basicGranulatesData, basicGranulatesSettings);

export default granulatesDataApi;
