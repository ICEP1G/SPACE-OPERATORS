import { ResultButtons } from "./ResultButtons";

export interface Result {
    buttons?: ResultButtons,
    switchs?: number[],
    links?: number[][]
}

export const Result = (
    buttons?: ResultButtons,
    switchs?: number[],
    links?: number[][]
): Result => ({
    buttons,
    switchs,
    links
})