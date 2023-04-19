import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import space_operators_db from '../../database/space_operators_db';
import { UserPlayer } from '../../models/UserPlayer';
import { Player } from '../../models/types/Player';
import { setGameIdAction, setGameOperationAction } from './action';
import { data_operation } from '../../models/types/data_operation';
import { Result } from '../../models/types/Result';

export interface GameState {
    gameId: string,
    turn: number,
    role: string,
    id: string,
    duration: number,
    description: string,
    elements: Element[],
    result: Result,
    shipState: number,
    players: UserPlayer[],
}

const initialState: GameState = {
    gameId: '',
    turn: 0,
    role: '',
    id: '',
    duration: 0,
    description: '',
    elements: [],
    result: {},
    shipState: 100,
    players: [],
};

    
const reducer = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        setGameId: setGameIdAction,
        setGameOperation: setGameOperationAction
    },
});

export const { setGameId, setGameOperation } = reducer.actions;
export default reducer.reducer;