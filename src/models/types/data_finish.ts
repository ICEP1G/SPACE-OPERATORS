
export interface data_finish {
    id: string,
    success: boolean
}

export const data_finish = (
    id: string,
    success: boolean
): data_finish => ({
    id,
    success
});