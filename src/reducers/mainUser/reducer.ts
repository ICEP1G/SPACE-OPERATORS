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

    
const reducer = createSlice({
    name: "mainUser",
    initialState: initialState,
    reducers: {
        setMainUser: setMainUserAction,
        updateMainUser: updateMainUserAction
    },
});

export const { setMainUser, updateMainUser } = reducer.actions;
export default reducer.reducer;