import { PayloadAction} from '@reduxjs/toolkit';
import { Player } from '../../models/types/Player';
import { LobbyState } from './reducer';

export const setLobbyPlayerAction = ( state: LobbyState, action: PayloadAction<Player[]>): LobbyState =>
({
    players: action.payload
});

