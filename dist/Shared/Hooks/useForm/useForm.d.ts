import { BaseSyntheticEvent, ChangeEvent } from 'react';
import { UseFormErrorHandler, UseFormSubmitHandler, UseFormValidations } from './useForm.types';
/**
 * A custom hook to manage form state, validation, and submission handling.
 *
 * @param options - Optional configuration object for the form.
 * @returns The form state and utility methods
 */
export declare const useForm: <T extends Record<keyof T, any> = {}>(options?: {
    /** An object containing validation rules for each form field. */
    validations?: UseFormValidations<T>;
    /** An object representing the initial values for the form fields. */
    initialValues?: Partial<T>;
    /** Defines when validation should occur:
     * - 'onChange': Validation occurs when the user modifies the input
     * - 'onBlur': Validation occurs when the input loses focus.
     *  @default ['onChange']
     */
    validationMode?: "onChange" | "onBlur" | "onSubmit" | "all";
    /**
     * @default false - A boolean indicating whether to trigger validation on mount.
     */
    shouldValidateOnMount?: boolean;
}) => {
    /** The current form data. */
    data: T;
    /** An object containing validation errors for each form field. */
    errors: Partial<Record<keyof T, string[]>>;
    register: <Value extends unknown, SFnReturnType extends unknown, CustomComponent extends boolean>(name: keyof T, registerOptions?: {
        /**
         * A function to sanitize the input value.
         * @param value The input value.
         * @returns The sanitized value.
         */
        sanitizeFn?: (value: CustomComponent extends true ? Value : string) => SFnReturnType;
        /**
         * Prevents the input value from being trimmed.
         *
         * If `noTrim` is set to true, the input value will not be automatically trimmed.\
         * This can be useful when whitespace is required for certain inputs.
         *
         * @default false - By default, the input will be trimmed.
         */
        noTrim?: boolean;
        /** A boolean flag indicating if the input is a custom component. */
        isCustomComponent?: CustomComponent;
    }) => {
        onChange: (e: CustomComponent extends true ? Value : ChangeEvent<HTMLInputElement, Element>) => void;
        onBlur: () => void;
        onFocus: () => void;
        name: keyof T;
    };
    handleSubmit: (onValid: UseFormSubmitHandler<T>, onError?: UseFormErrorHandler<T>) => (e?: BaseSyntheticEvent) => Promise<void>;
    trigger: (name: keyof T | (keyof T)[]) => (string | string[]) | (string | string[])[];
    setValue: (name: keyof T, value: T[keyof T], valueOptions?: {
        /** A boolean indicating whether to mark the field as dirty after setting the value. */
        shouldDirty?: boolean;
        /** A boolean indicating whether to mark the field as touched after setting the value. */
        shouldTouch?: boolean;
        /** A boolean indicating whether to trigger validation after setting the value. */
        triggerError?: boolean;
    }) => void;
    reset: (formData: T, resetOptions?: {
        /** A boolean indicating whether to retain the current dirty state of the form fields. */
        keepDirty?: boolean;
        /** A boolean indicating whether to retain the current touched state of the form fields. */
        keepTouched?: boolean;
        /** A boolean indicating whether to retain the current error state of the form fields. */
        keepErrors?: boolean;
        /** A boolean indicating whether the form should check for dirty state upon reset. */
        triggerDirty?: boolean;
        /** A boolean indicating whether the form should check for errors upon reset. */
        triggerError?: boolean;
        /** A boolean indicating whether the initial values of the form should be retained after reset. If false, provided formData will become initial data. */
        keepInitialValues?: boolean;
        /** Partial initial values to override the current initial values upon reset.
         * @note `keepInitialValues` will have no effect when this is provided.
         */
        formInitialValues?: Partial<T>;
    }) => void;
    /** An object representing additional form state. */
    formState: {
        /** An object indicating which fields have been touched (interacted with). */
        touchedFields: Partial<Record<keyof T, boolean>>;
        /** An object indicating which fields have been modified. */
        dirtyFields: Partial<Record<keyof T, boolean>>;
        /** A boolean indicating if any field has been modified. */
        isDirty: boolean;
    };
    getErrorsFromFormData: (formData: T) => Partial<Record<keyof T, string[]>>;
};
