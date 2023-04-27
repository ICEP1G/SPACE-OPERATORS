
export interface OldGame {
    gameId: string,
    rounds: number,
    gameCreationDate: string
    playersNames: string
}

export const OldGame = (
    gameId: string,
    rounds: number,
    gameCreationDate: string,
    playersNames: string
): OldGame => ({
    gameId,
    rounds,
    gameCreationDate,
    playersNames
});