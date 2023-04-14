
export interface ResultButtons {
    order: string,
    ids: number[]
}

export const ResultButtons = (
    order: string,
    ids: number[]
): ResultButtons => ({
    order,
    ids
});