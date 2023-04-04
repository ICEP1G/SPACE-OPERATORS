import { PayloadAction} from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { MainUserState } from './reducer';

export const setMainUserAction = ( state: MainUserState, action: PayloadAction<User[]>): MainUserState =>
({
    MainUser: action.payload
});