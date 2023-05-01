
export interface OldGame {
    gameId: string,
    rounds: number,
    gameCreationDate: string,
    gameCreationTime: string,
    playersNames: string
}

export const OldGame = (
    gameId: string,
    rounds: number,
    gameCreationDate: string,
    gameCreationTime: string,
    playersNames: string
): OldGame => ({
    gameId,
    rounds,
    gameCreationDate,
    gameCreationTime,
    playersNames
});