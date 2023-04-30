import { createSlice } from '@reduxjs/toolkit';
import { Player } from '../../models/types/Player';
import { setGameIdAction, setGameOperationAction, setGameShipIntegrityAction, addButtonResultToGameAction, resetAllResultGameAction, addSwitchResultToGameAction, removeSwitchResultToGameAction, resetOperationGameAction, setPlayersGameAction, resetDurationAction, resetAllGameAction } from './action';
import { Result } from '../../models/types/Result';
import { Element } from '../../models/types/Element';

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
    playersStatus: Player[],
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
    playersStatus: [],
};

    
const reducer = createSlice({
    name: "game",
    initialState: initialState,
    reducers: {
        setGameId: setGameIdAction,
        setGameOperation: setGameOperationAction,
        setGameShipIntegrity: setGameShipIntegrityAction,
        addButtonResultToGame: addButtonResultToGameAction,
        addSwitchResultToGame: addSwitchResultToGameAction,
        removeSwitchResultToGame: removeSwitchResultToGameAction,
        resetAllResultGame: resetAllResultGameAction,
        resetOperationGame: resetOperationGameAction,
        setPlayersGame: setPlayersGameAction,
        resetDuration: resetDurationAction,
        resetAllGame: resetAllGameAction
    },
});

export const { setGameId, setGameOperation, setGameShipIntegrity, addButtonResultToGame, resetAllResultGame, addSwitchResultToGame, removeSwitchResultToGame, resetOperationGame, setPlayersGame, resetDuration, resetAllGame } = reducer.actions;
export default reducer.reducer;