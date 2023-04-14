
export interface data_start {
    gameId: string
}

export const data_start = (
    gameId: string
): data_start => ({
    gameId
});