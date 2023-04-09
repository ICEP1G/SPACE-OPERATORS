
export interface type_destroyed {
    turns: number
}

export const type_destroyed = (
    turns: number
): type_destroyed => ({
    turns
});