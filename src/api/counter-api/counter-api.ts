//abstract classes
import AbstractCounterApi from "./abstract-counter-api";
//types
import type { IAbstractCounterApiConstructorType } from "../../types/api-types";


class CounterApi extends AbstractCounterApi {
  constructor (
    { dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction }: IAbstractCounterApiConstructorType,
  ) {
    super({ dispatch, incrementAction, decrementAction, setMessage, setStatus, logAction });
  };
};

export default CounterApi;
