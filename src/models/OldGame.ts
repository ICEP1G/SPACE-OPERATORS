
export interface OldGame {
    id: number,
    rounds: string,
    gameCreationDate: string
    playersNames: string[]
}

export const OldGame = (
    id: number,
    rounds: string,
    gameCreationDate: string,
    playersNames: string[]
): OldGame => ({
    id,
    rounds,
    gameCreationDate,
    playersNames
});