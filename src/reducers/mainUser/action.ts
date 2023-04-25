import { PayloadAction} from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { MainUserState } from './reducer';
import { actualUser, createUser, updateUserName } from '../../databaseObjects/UsersDAO';

export const setMainUserAction = ( state: MainUserState, action: PayloadAction<User[]>): MainUserState =>
({
    MainUser: action.payload,
    isFetchingUsers: false
});

export const updateMainUserAction = ( state: MainUserState, action: PayloadAction<User>): MainUserState =>
({
    ...state,
    // Update the MainUser Array and save the new user name in the database
    MainUser: state.MainUser.map((user: User) => {
        if (user.id === action.payload.id) {
            updateUserName(action.payload)
            return action.payload;
        }  
        return user;
    })
});