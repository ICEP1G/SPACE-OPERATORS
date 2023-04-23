import { Result } from "./Result";
import { Element } from "./Element";

export interface data_operation {
    type: string,
    data: {
        turn: number,
        role: string,
        id: string,
        duration: number,
        description: string,
        elements: Element[],
        result: Result
    }
}

export const data_operation = (
    type: string,
    data: {
        turn: number,
        role: string,
        id: string,
        duration: number,
        description: string,
        elements: Element[],
        result: Result
    }
): data_operation => ({
    type,
    data
});