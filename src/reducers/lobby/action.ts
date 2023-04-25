import { PayloadAction} from '@reduxjs/toolkit';
import { Player } from '../../models/types/Player';
import { LobbyState } from './reducer';

export const setLobbyPlayerAction = ( state: LobbyState, action: PayloadAction<Player[]>): LobbyState =>
({
    ...state,
    players: action.payload
});

export const setLobbyGameIdAction = ( state: LobbyState, action: PayloadAction<string>): LobbyState =>
({
    ...state,
    gameId: action.payload
});

