import { PayloadAction} from '@reduxjs/toolkit';
import { GameState } from './reducer';
import { data_operation } from '../../models/types/data_operation';
import { data_integrity } from '../../models/types/data_integrity';

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
})

export const addButtonResultToGameAction = (state: GameState, action: PayloadAction<number>): GameState =>
({
    ...state,
    buttonResult: state.buttonResult.concat(action.payload)
})

export const resetAllResultGameAction = (state: GameState): GameState =>
({
    ...state,
    buttonResult: [],
    switchResult: []
})