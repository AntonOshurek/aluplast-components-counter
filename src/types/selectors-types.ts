import {
  SelectorGetCurrentGum,
  SelectorGetCurrentPigments,
  SelectorGetGumsSettingsCardboardWeight,
  SelectorGetGumsState,
  SelectorGetPigmentsSettingsVorekWeight,
  SelectorGetPigmentsState,
  SelectorGetPigmentsSettingsContainerWeight
} from "../store/selectors/selectors";
import { clearItemAction as pigmentsClearItemAction } from "../store/slices/pigments-slice";
import { clearItemAction as clearItemActionGums } from "../store/slices/gums-slice";

//this types used in counter-page component, for props actions.
export type GetItemSelector = typeof SelectorGetCurrentGum | typeof SelectorGetCurrentPigments;
export type ClearItemSelector = typeof pigmentsClearItemAction | typeof clearItemActionGums;
export type GetStateSelectorType = typeof SelectorGetGumsState | typeof SelectorGetPigmentsState;
export type GetItemVeightSelectorsType = typeof SelectorGetGumsSettingsCardboardWeight | typeof SelectorGetPigmentsSettingsVorekWeight;
export type GetSettingsWithdrawalCountType = typeof SelectorGetPigmentsSettingsContainerWeight;
