import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Player } from '../../models/types/Player';
import { setLobbyPlayerAction } from './action';

export interface LobbyState {
    players: Player[]
    allUsersReady: boolean
}

const initialState: LobbyState = {
    players: [],
    allUsersReady: false
};

    
const reducer = createSlice({
    name: "lobby",
    initialState: initialState,
    reducers: {
        setLobbyPlayer: setLobbyPlayerAction
    },
});

export const { setLobbyPlayer } = reducer.actions;
export default reducer.reducer;