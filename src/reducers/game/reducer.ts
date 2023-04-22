import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import space_operators_db from '../../database/space_operators_db';
import { UserPlayer } from '../../models/UserPlayer';
import { Player } from '../../models/types/Player';
import { setGameIdAction, setGameOperationAction, setGameShipIntegrityAction, addButtonResultToGameAction, resetAllResultGameAction } from './action';
import { data_operation } from '../../models/types/data_operation';
import { Result } from '../../models/types/Result';
import { ResultButtons } from '../../models/types/ResultButtons';

export interface GameState {
    gameId: string,
    turn: number,
    role: string,
    id: string,
    duration: number,
    description: string,
    elements: Element[],
    result: Result,
    buttonResult: number[],
    switchResult: number[],
    shipIntegrity: number,
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
    buttonResult: [],
    switchResult: [],
    shipIntegrity: 100,
    players: [],
};

    
const reducer = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        setGameId: setGameIdAction,
        setGameOperation: setGameOperationAction,
        setGameShipIntegrity: setGameShipIntegrityAction,
        addButtonResultToGame: addButtonResultToGameAction,
        resetAllResultGame: resetAllResultGameAction
    },
});

export const { setGameId, setGameOperation, setGameShipIntegrity, addButtonResultToGame, resetAllResultGame } = reducer.actions;
export default reducer.reducer;