import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { setMainUserAction, updateMainUserAction } from './action';

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