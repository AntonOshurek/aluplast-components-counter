import {
  SelectorGetCurrentGum,
  SelectorGetCurrentPigments,
  SelectorGetGumsSettingsCardboardWeight,
  SelectorGetGumsState,
  SelectorGetPigmentsSettingsVorekWeight,
  SelectorGetPigmentsState,
  SelectorGetPigmentsSettingsContainerWeight
} from "../store/selectors/selectors";

//this types used in counter-page component, for props actions.
export type GetItemSelectorAction = typeof SelectorGetCurrentGum | typeof SelectorGetCurrentPigments;
export type GetStateSelectorType = typeof SelectorGetGumsState | typeof SelectorGetPigmentsState;
export type GetItemVeightSelectorsType = typeof SelectorGetGumsSettingsCardboardWeight | typeof SelectorGetPigmentsSettingsVorekWeight;
export type GetSettingsWithdrawalCountType = typeof SelectorGetPigmentsSettingsContainerWeight;
