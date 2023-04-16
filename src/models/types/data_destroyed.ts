
export interface data_destroyed {
    type: string,
    data: {
        turn: number
    }
}

export const data_destroyed = (
    type: string,
    data: {
        turn: number
    }
): data_destroyed => ({
    type,
    data
});