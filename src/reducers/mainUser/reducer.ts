import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { setMainUserAction, updateMainUserAction } from './action';
import { actualUser, createUser, updateUserName } from '../../databaseObjects/UsersDAO';
import uuid from 'react-native-uuid';
import { randomUserName } from "../../services/RandomNameGenerator";
import space_operators_db from '../../database/space_operators_db';

export interface MainUserState {
    MainUser: User[],
    isFetchingUsers: boolean
}

const initialState: MainUserState = {
    MainUser: [],
    isFetchingUsers: false
};


// Get the Main user of the app, if it doesn't exist then create a new user
// We only need ONE user but REDUX seems to only accept an array of users...
export const GetMainUser = createAsyncThunk(
    'users/fetchUsers', () =>
        actualUser()
        .then((mainUser) => {
            if (mainUser.length <= 0) {
                // Create a new user with a random UUID and Name
                const newUser = User(1 ,uuid.v4().toString(), randomUserName());
                // Add the new user in database
                createUser(newUser);
                // Add the new user in the array
                mainUser.push(newUser);
                return mainUser;
            }
            return mainUser
        })
);
    

const reducer = createSlice({
    name: "mainUser",
    initialState: initialState,
    reducers: {
        setMainUser: setMainUserAction,
        updateMainUser: updateMainUserAction
    },
    extraReducers: (builder) => {
        builder.addCase(
            GetMainUser.pending,
            (state) => ({
                ...state,
                isFetchingUsers: true
            })
        );
        builder.addCase(
            GetMainUser.fulfilled,
            setMainUserAction
        );
    }
});

export const { setMainUser, updateMainUser } = reducer.actions;
export default reducer.reducer;