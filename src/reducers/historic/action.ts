import { PayloadAction} from '@reduxjs/toolkit';
import { OldGame } from '../../models//OldGame';
import { HistoricState } from './reducer';

export const setOldGamesAction = ( state: HistoricState, action: PayloadAction<OldGame[]>): HistoricState =>
({
    ...state,
    oldGames: action.payload
});
