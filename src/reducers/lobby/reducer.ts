import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Player } from '../../models/types/Player';
import { setLobbyPlayerAction, setLobbyGameIdAction } from './action';

export interface LobbyState {
    players: Player[],
    gameId: string
}

const initialState: LobbyState = {
    players: [],
    gameId: ''
};

    
const reducer = createSlice({
    name: "lobby",
    initialState: initialState,
    reducers: {
        setLobbyPlayer: setLobbyPlayerAction,
        setLobbyGameId: setLobbyGameIdAction
    },
});

export const { setLobbyPlayer, setLobbyGameId } = reducer.actions;
export default reducer.reducer;