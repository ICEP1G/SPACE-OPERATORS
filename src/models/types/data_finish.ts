
export interface data_finish {
    type: string,
    data: {
        operator: string,
        success: boolean
    }
}

export const data_finish = (
    type: string,
    data: {
        operator: string,
        success: boolean
    }
): data_finish => ({
    type,
    data
});