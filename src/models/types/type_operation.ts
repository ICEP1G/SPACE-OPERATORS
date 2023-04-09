import { Result } from "./Result";

export interface type_operation {
    turn: number,
    role: string,
    id: string,
    duration: number,
    description: string,
    elements: Element[],
    result: Result
}

export const type_operation = (
    turn: number,
    role: string,
    id: string,
    duration: number,
    description: string,
    elements: Element[],
    result: Result
): type_operation => ({
    turn,
    role,
    id,
    duration,
    description,
    elements,
    result
});