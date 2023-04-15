
export interface data_integrity {
    type: string,
    data: {
        integrity: number
    }
}

export const data_integrity = (
    type: string,
    data: {
        integrity: number
    }
): data_integrity => ({
    type,
    data
});