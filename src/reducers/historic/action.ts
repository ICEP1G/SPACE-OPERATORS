import { PayloadAction} from '@reduxjs/toolkit';
import { OldGame } from '../../models//OldGame';
import { oldGamesState } from './reducer';

export const setOldGamesAction = ( state: oldGamesState, action: PayloadAction<OldGame[]>): oldGamesState =>
({
    ...state,
    oldGames: action.payload
});
