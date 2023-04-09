
export interface Player {
    name: string,
    status: boolean
}

export const Player = (
    name: string,
    status: boolean
): Player => ({
    name,
    status
});