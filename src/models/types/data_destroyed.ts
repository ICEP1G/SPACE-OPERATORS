
export interface data_destroyed {
    turns: number
}

export const data_destroyed = (
    turns: number
): data_destroyed => ({
    turns
});