import { Player } from "./Player";

export interface type_players {
    players: Player[]
}

export const type_players = (
    players: Player[]
): type_players => ({
    players
});