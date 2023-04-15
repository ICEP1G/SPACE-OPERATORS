
export interface data_finish {
    type: string,
    data: {
        id: string,
        success: boolean
    }
}

export const data_finish = (
    type: string,
    data: {
        id: string,
        success: boolean
    }
): data_finish => ({
    type,
    data
});