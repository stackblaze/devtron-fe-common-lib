import { URLProtocolType } from './types';
export interface ValidationResponseType {
    isValid: boolean;
    message?: string;
}
export declare const MESSAGES: {
    PROVIDE_A_NUMBER: string;
    LOWERCASE_ALPHANUMERIC: string;
    CAN_NOT_START_END_WITH_SEPARATORS: string;
    getMinMaxCharMessage: (min: number, max: number) => string;
    getMaxCharMessage: (max: number) => string;
    getMinCharMessage: (min: number) => string;
    VALID_POSITIVE_NUMBER: string;
    VALID_POSITIVE_INTEGER: string;
    MAX_SAFE_INTEGER: string;
    INVALID_SEMANTIC_VERSION: string;
    INVALID_DATE: string;
    DATE_BEFORE_CURRENT_TIME: string;
};
export declare const MAX_DESCRIPTION_LENGTH = 350;
export declare const validateLabelValue: (value: string) => string[];
export declare const validateLabelKey: (key: string, skipValidationIfSpecialPrefix?: boolean) => {
    isValid: boolean;
    messages: string[];
};
export declare const requiredField: (value: string) => ValidationResponseType;
export declare const validateName: (name: string) => ValidationResponseType;
export declare const validateDescription: (description: string) => ValidationResponseType;
export declare const validateStringLength: (value: string, maxLimit: number, minLimit: number) => ValidationResponseType;
export declare const validateRequiredPositiveNumber: (value: string | number) => ValidationResponseType;
export declare const validateRequiredPositiveInteger: (value: string | number) => ValidationResponseType;
export declare const validateURL: (url: string, allowBase64Url?: boolean) => ValidationResponseType;
export declare const validateProtocols: (url: string, protocols: URLProtocolType[], isRequired?: boolean) => ValidationResponseType;
export declare const validateIfImageExist: (url: string) => Promise<ValidationResponseType>;
export declare const validateUniqueKeys: (keys: string[]) => {
    isValid: boolean;
    message?: undefined;
} | {
    isValid: boolean;
    message: string;
};
/**
 * Rules for valid semantic version:
 * 1. version.length < 128 and not empty
 * 2. version should follow semantic versioning regex from https://semver.org/
 */
export declare const validateSemanticVersioning: (version: string) => ValidationResponseType;
/**
 * A valid display name should be between 3 and 50 characters
 */
export declare const validateDisplayName: (name: string) => ValidationResponseType;
export declare const SCHEMA_07_VALIDATOR_STRICT: import('@rjsf/validator-ajv8/lib/validator').default<any, import('@rjsf/utils').RJSFSchema, any>;
export declare const SCHEMA_07_VALIDATOR: import('@rjsf/validator-ajv8/lib/validator').default<any, import('@rjsf/utils').RJSFSchema, any>;
export declare const doesJSONConformToSchema07: (json: string, strict?: boolean) => ValidationResponseType;
export declare const validateDateAndTime: (date: Date) => ValidationResponseType;
export declare const validateIframe: (input: string) => ValidationResponseType;
export declare const validateCMVolumeMountPath: (value: string) => {
    isValid: boolean;
    message: string;
};
export declare const validateYAML: (yamlString: string, isRequired?: boolean) => ValidationResponseType;
export declare const validateEmail: (email: string) => ValidationResponseType;
export declare const getIsRegexValid: (regexString: string) => ValidationResponseType;
export declare const validateCronExpression: (expression: string) => ValidationResponseType;
export declare const validateAppName: (value: string) => Required<ValidationResponseType>;
