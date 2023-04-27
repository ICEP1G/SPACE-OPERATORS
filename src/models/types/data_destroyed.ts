
export interface data_destroyed {
    type: string,
    data: {
        turns: number
    }
}

export const data_destroyed = (
    type: string,
    data: {
        turns: number
    }
): data_destroyed => ({
    type,
    data
});