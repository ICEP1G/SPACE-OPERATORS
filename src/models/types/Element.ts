
export interface Element {
    type: string,
    id: number,
    valueType: string,
    value: string | number
}

export const Element = (
    type: string,
    id: number,
    valueType: string,
    value: string | number
): Element => ({
    type,
    id,
    valueType,
    value
});