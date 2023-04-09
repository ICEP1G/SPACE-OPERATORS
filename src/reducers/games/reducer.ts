import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import space_operators_db from '../../database/space_operators_db';
import { UserPlayer } from '../../models/UserPlayer';

export interface GameState {
    id: string,
    turn: number,
    shipState: number,
    players: UserPlayer[]
}

const initialState: GameState = {
    id: '',
    turn: 1,
    shipState: 100,
    players: []
};

    
const reducer = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
    },
});

export const {  } = reducer.actions;
export default reducer.reducer;