import { ResultButtons } from "./ResultButtons";

export interface Result {
    buttons: ResultButtons,
    switches: number[],
    links: number[][]
}

export const Result = (
    buttons: ResultButtons,
    switches: number[],
    links: number[][]
): Result => ({
    buttons,
    switches,
    links
})