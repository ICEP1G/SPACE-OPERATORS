import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/User';
import { setMainUserAction } from './action';
import { actualUser } from '../../databaseObjects/UsersDAO';

export interface MainUserState {
    MainUser: User
}

const initialState: MainUserState = {
    MainUser: {
        uuid: '',
        name: ''
    },
};


// export const GetMainUser =
//     actualUser()
//         .then(())


const reducer = createSlice({
    name: "mainUser",
    initialState: initialState,
    reducers: {
        setMainUser: setMainUserAction
    }
});

export const { setMainUser } = reducer.actions;
export default reducer.reducer;