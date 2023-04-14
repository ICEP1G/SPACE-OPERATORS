
export interface data_destroyed {
    ping: string
}

export const data_destroyed = (
    ping: string
): data_destroyed => ({
    ping
});