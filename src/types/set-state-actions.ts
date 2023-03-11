import { Dispatch, SetStateAction } from 'react';
import { InputStatuses } from '../variables/variables';

export type SetMessageStateType = Dispatch<SetStateAction<string>>;
export type SetStatusStateType = Dispatch<SetStateAction<InputStatuses>>;
