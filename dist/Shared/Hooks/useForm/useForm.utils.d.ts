import { UseFormValidation } from './useForm.types';
/**
 * Validates a form field based on the provided validation rules.
 *
 * @template T - A record type representing form data.
 * @param value - The value of the form field to be validated.
 * @param validation - The validation rules for the form field.
 * @returns Returns error message(s) or null if valid.
 */
export declare const checkValidation: <T extends Record<keyof T, any> = {}>(value: T[keyof T], validation: UseFormValidation) => string[] | null;
