import { Result } from "../models/types/Result";


export const VerifyIfRoundIsSuccessful = (intendedResult: Result, buttonResult: number[], switchResult: number[]): boolean => {

    if (intendedResult.buttons !== undefined || intendedResult.buttons != null) {
        if (intendedResult.buttons.order === "random") {
            // Verify there is the same values and the same amount between the two array but not in the same order
            const verifiedArray = JSON.stringify(intendedResult.buttons.ids.sort()) === JSON.stringify(buttonResult.sort());
            return verifiedArray;
        }
        else {
            // Verify values between the two array at each index
            const verifiedArray = intendedResult.buttons.ids.every((value, index) => value === buttonResult[index]);
            return verifiedArray;
        }
    }
    else {
        // Verify there is the same values between the two array
        const verifiedArray = JSON.stringify(intendedResult.switchs?.sort()) === JSON.stringify(switchResult.sort());
        return verifiedArray;
    }
}


