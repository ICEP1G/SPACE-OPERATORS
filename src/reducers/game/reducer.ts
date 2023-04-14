import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import space_operators_db from '../../database/space_operators_db';
import { UserPlayer } from '../../models/UserPlayer';
import { Player } from '../../models/types/Player';
import { setGameIdAction } from './action';

export interface GameState {
    gameId: string,
    turn: number,
    shipState: number,
    players: UserPlayer[],
}

const initialState: GameState = {
    gameId: '',
    turn: 1,
    shipState: 100,
    players: [],
};

    
const reducer = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        setGameId: setGameIdAction
    },
});

export const { setGameId } = reducer.actions;
export default reducer.reducer;