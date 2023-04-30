import { PayloadAction} from '@reduxjs/toolkit';
import { GameState } from './reducer';
import { data_operation } from '../../models/types/data_operation';
import { Player } from '../../models/types/Player';

export const setGameIdAction = (state: GameState, action: PayloadAction<string>): GameState =>
({
    ...state,
    gameId: action.payload
});

export const setGameOperationAction = (state: GameState, action: PayloadAction<data_operation>): GameState =>
({
    ...state,
    turn: action.payload.data.turn,
    role: action.payload.data.role,
    id: action.payload.data.id,
    duration: action.payload.data.duration,
    description: action.payload.data.description,
    elements: action.payload.data.elements,
    result: action.payload.data.result
});

export const setGameShipIntegrityAction = (state: GameState, action: PayloadAction<number>): GameState =>
({
    ...state,
    shipIntegrity: action.payload
});

export const addButtonResultToGameAction = (state: GameState, action: PayloadAction<number>): GameState =>
({
    ...state,
    buttonResult: state.buttonResult.concat(action.payload)
});

export const addSwitchResultToGameAction = (state: GameState, action: PayloadAction<number>): GameState =>
({
    ...state,
    switchResult: state.switchResult.concat(action.payload)
});

export const removeSwitchResultToGameAction = (state: GameState, action: PayloadAction<number>): GameState =>
({
    ...state,
    switchResult: state.switchResult.filter(nb => nb !== action.payload)
});


export const resetAllResultGameAction = (state: GameState): GameState =>
({
    ...state,
    buttonResult: [],
    switchResult: []
});

export const resetOperationGameAction = (state: GameState): GameState => 
({
    ...state,
    role: '',
    id: '',
    description: '',
    elements: [],
    result: {}
});

export const resetDurationAction = (state: GameState): GameState => 
({
    ...state,
    duration: 0
});

export const setPlayersGameAction = (state: GameState, action: PayloadAction<Player[]>): GameState =>
({
    ...state,
    playersStatus: action.payload
});

export const resetAllGameAction = (state: GameState): GameState =>
({
    ...state,
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
});