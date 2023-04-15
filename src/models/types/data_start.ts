
export interface data_start {
    type: string
    data: {
        gameId: string
    }
}

export const data_start = (
    type: string,
    data: {
        gameId: string
    }
): data_start => ({
    type,
    data
});