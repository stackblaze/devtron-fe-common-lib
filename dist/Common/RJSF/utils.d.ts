import { TranslatableString } from '@rjsf/utils';
import { GetFormStateFromFormDataProps, HiddenType, MetaHiddenType, RJSFFormSchema, UpdateFormDataFromFormStateProps } from './types';
/**
 * Override for the TranslatableString from RJSF
 */
export declare const translateString: (stringToTranslate: TranslatableString, params?: string[]) => string;
/**
 * Returns the redirection props for a url
 */
export declare const getRedirectionProps: (url: string) => React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    url: string;
};
/**
 * Infers the type for json schema from value type
 */
export declare const getInferredTypeFromValueType: (value: any) => "string" | "number" | "boolean" | "object" | "array" | "null";
export declare const conformPathToPointers: (path: string) => string;
export declare const parseSchemaHiddenType: (hiddenSchema: HiddenType) => MetaHiddenType;
export declare const getSchemaPathToUpdatePathMap: (schema: RJSFFormSchema) => Record<string, string>;
export declare const updateFormDataFromFormState: ({ formState, formData, schemaPathToUpdatePathMap, }: UpdateFormDataFromFormStateProps) => Record<string, unknown>;
export declare const getFormStateFromFormData: ({ formData, schemaPathToUpdatePathMap }: GetFormStateFromFormDataProps) => {};
