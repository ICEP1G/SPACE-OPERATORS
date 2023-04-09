
export interface type_connect {
    gameId: string,
    playerId: string,
    playerName: string
}

export const type_connect = (
    gameId: string,
    playerId: string,
    playerName: string
): type_connect => ({
    gameId,
    playerId,
    playerName
});