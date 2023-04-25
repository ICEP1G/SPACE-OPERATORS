
export interface data_connect {
    type: string,
    data: {
        gameId: string,
        playerId: string,
        playerName: string
    }
}

export const data_connect = (
    type: string,
    data: {
        gameId: string,
        playerId: string,
        playerName: string
    }
): data_connect => ({
    type,
    data
});