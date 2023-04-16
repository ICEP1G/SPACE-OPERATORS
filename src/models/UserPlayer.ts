
export interface UserPlayer {
    id: string,
    name: string
}

export const UserPlayer = (
    id: string,
    name: string
): UserPlayer => ({
    id,
    name
});