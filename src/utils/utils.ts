import { AppRoute } from "../variables/variables";

type GetRouteWithUNIDType = {
  [name: string]: (UNID: number) => string ,
}

export const getRouteWithUNID: GetRouteWithUNIDType = {
  [AppRoute.GRANULATES_COUNTER]: (UNID: number): string => `/granulates/${UNID}/`,
  [AppRoute.GRANULATES_COUNTER_CONTAINER]: (UNID: number): string => `/granulates/${UNID}/container`,
  [AppRoute.GRANULATES_COUNTER_VOREK]: (UNID: number): string => `/granulates/${UNID}/vorek`,
};
