/**
 *
 * @param value tag key value to validate
 * @returns isValid: boolean, errorMessages: string[]
 */
export declare const validateTagKeyValue: (value: string) => {
    isValid: boolean;
    errorMessages: string[];
};
export declare const validateTagValue: (value: string, key: string) => {
    isValid: boolean;
    errorMessages: string[];
};
