
export interface ResultButtons {
    order: string,
    ids: string
}

export const ResultButtons = (
    order: string,
    ids: string
): ResultButtons => ({
    order,
    ids
});