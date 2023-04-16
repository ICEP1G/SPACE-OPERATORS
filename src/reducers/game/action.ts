import { PayloadAction} from '@reduxjs/toolkit';
import { GameState } from './reducer';

export const setGameIdAction = ( state: GameState, action: PayloadAction<string>): GameState =>
({
    ...state,
    gameId: action.payload
});