
export interface UserPlayer {
    name: string
    hasLeave: boolean
}

export const UserPlayer = (
    name: string,
    hasLeave: boolean
): UserPlayer => ({
    name,
    hasLeave
});