
export interface type_finish {
    id: string,
    success: boolean
}

export const type_finish = (
    id: string,
    success: boolean
): type_finish => ({
    id,
    success
});