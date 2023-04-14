import { Player } from "./Player";

export interface data_players {
    players: Player[]
}

export const data_players = (
    players: Player[]
): data_players => ({
    players
});

