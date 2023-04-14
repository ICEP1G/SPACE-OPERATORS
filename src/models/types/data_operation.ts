import { Result } from "./Result";

export interface data_operation {
    turn: number,
    role: string,
    id: string,
    duration: number,
    description: string,
    elements: Element[],
    result: Result
}

export const data_operation = (
    turn: number,
    role: string,
    id: string,
    duration: number,
    description: string,
    elements: Element[],
    result: Result
): data_operation => ({
    turn,
    role,
    id,
    duration,
    description,
    elements,
    result
});