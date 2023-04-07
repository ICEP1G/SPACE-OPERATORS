
export interface User {
    id: number,
    uuid: string,
    name: string
}

export const User = (
    id: number,
    uuid: string,
    name: string
): User => ({
    id,
    uuid,
    name
});
