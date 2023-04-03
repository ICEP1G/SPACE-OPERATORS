
export interface User {
    uuid: string,
    name: string
}

export const User = (
    uuid: string,
    name: string
): User => ({
    uuid,
    name
});