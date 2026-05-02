import { ValidationResponseType } from '../../../Shared/validations';
import { ValidateNodeSelectorParamsType, ValidateRequestLimitResponseType, ValidateRequestLimitType } from '../../index';
/**
 * @description A valid platform name should not be empty and be less than 128 characters. Plus profile can not have duplicate platform names
 */
export declare const validateTargetPlatformName: (name: string, platformMap: Record<string, unknown>) => ValidationResponseType;
export declare const validateLabelValue: (value?: string) => Pick<ValidationResponseType, "isValid"> & {
    messages: string[];
};
export declare const validateRequestLimit: ({ request, limit, unitsMap, }: ValidateRequestLimitType) => ValidateRequestLimitResponseType;
export declare const validateNodeSelector: ({ selector: { key, value, id }, existingKeys, profileInputErrors: currentInputErrors, }: ValidateNodeSelectorParamsType) => void;
