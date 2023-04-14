
export interface data_connect {
    gameId: string,
    playerId: string,
    playerName: string
}

export const data_connect = (
    gameId: string,
    playerId: string,
    playerName: string
): data_connect => ({
    gameId,
    playerId,
    playerName
});


export interface send_data_connect {
    type: string,
    data: data_connect
}
export const send_data_connect = (
    type: string,
    data: data_connect
): send_data_connect => ({
    type,
    data
});