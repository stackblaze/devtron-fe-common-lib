import { FormFieldInfoProps, FormFieldLabelProps } from './types';
export declare const getFormErrorElementId: (inputId: FormFieldLabelProps["inputId"]) => string;
export declare const getFormLabelElementId: (inputId: FormFieldLabelProps["inputId"]) => string;
export declare const getFormHelperTextElementId: (inputId: FormFieldLabelProps["inputId"]) => string;
export declare const getFormFieldAriaAttributes: ({ inputId, label, ariaLabel, required, error, helperText, }: Required<Pick<FormFieldLabelProps, "label" | "ariaLabel" | "required" | "inputId"> & Pick<FormFieldInfoProps, "error" | "helperText">>) => {
    'aria-labelledby': string;
    'aria-errormessage'?: string;
    'aria-invalid'?: boolean;
    'aria-describedby'?: string;
    'aria-required': boolean;
} | {
    'aria-label': string;
    'aria-errormessage'?: string;
    'aria-invalid'?: boolean;
    'aria-describedby'?: string;
    'aria-required': boolean;
};
