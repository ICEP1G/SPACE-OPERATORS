import { Player } from "./Player";


export interface data_players {
    type: string,
    data: {
        players: Player[]
    }
};

export const data_players = (
    type: string,
    data: {
        players: Player[]
    }
): data_players => ({
    type,
    data
});