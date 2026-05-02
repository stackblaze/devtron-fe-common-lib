import { CMSecretComponentType } from '../../../Shared/Services';
import { BuildInfraAPIVersionType, BuildInfraConfigTypes, BuildInfraFormFieldType, BuildInfraInheritActionsOnSubValues, BuildInfraLocators, BuildInfraMetaConfigTypes, BuildInfraToleranceEffectType, BuildInfraToleranceOperatorType, HandleProfileInputChangeType, InfraConfigWithSubValues, ProfileInputErrorType, RequestLimitConfigType, TargetPlatformErrorFields, ValidateRequestLimitType } from './types';
export declare const BUILD_INFRA_INPUT_CONSTRAINTS: {
    readonly STEP: "any";
    readonly MIN: 0;
    readonly DECIMAL_PLACES: 2;
    readonly MAX_LABEL_VALUE_LENGTH: 63;
};
export declare const DEFAULT_PROFILE_NAME = "global";
export declare const BUILD_INFRA_TEXT: {
    readonly HEADING: "Build Infra Configuration";
    readonly EDIT_SUBMIT: "Save changes";
    readonly SAVE_SUBMIT: "Save";
    readonly EDIT_CANCEL: "Cancel";
    readonly EDIT_DEFAULT_TOOLTIP: "Efficiently control infrastructure settings such as CPU, Memory, and Build timeout for your build pipelines. Streamline resource management to optimise build time and cost effortlessly.";
    readonly DESCRIPTION_LABEL: "Description";
    readonly DESCRIPTION_PLACEHOLDER: "Enter a description here";
    readonly PROFILE_LABEL: "Profile name";
    readonly PROFILE_PLACEHOLDER: "Enter a name eg. java/node/small/medium/large";
    readonly INHERITING_HEADING_DESCRIPTION: "Inheriting from global";
    readonly SUBMIT_BUTTON_TIPPY: {
        readonly INVALID_INPUT: "Valid input is required for all mandatory fields.";
        readonly REQUEST_IN_PROGRESS: "Request in progress.";
    };
    readonly VALIDATE_REQUEST_LIMIT: {
        readonly REQUEST_LESS_THAN_LIMIT: "Request should be less than or equal to limit.";
        readonly CAN_NOT_COMPUTE: "Request and limit value diff are too high to validate.";
        readonly REQUEST_DECIMAL_PLACES: "Request should be upto 2 decimal places.";
        readonly LIMIT_DECIMAL_PLACES: "Limit should be upto 2 decimal places.";
    };
    readonly getInvalidActionMessage: (action: HandleProfileInputChangeType["action"]) => string;
    readonly getSubmitSuccessMessage: (profileName: string, isEdited: boolean) => string;
    readonly PROFILE_NOT_FOUND: {
        readonly title: "Profile not found";
        readonly subTitle: "The profile you are looking for does not exist.";
    };
    readonly INVALID_FORM_MESSAGE: "Valid input is required for all mandatory fields.";
};
export declare const BUILD_INFRA_LOCATOR_MARKER_MAP: Readonly<Record<BuildInfraLocators, BuildInfraFormFieldType['marker']>>;
export declare const BUILD_INFRA_LOCATOR_LABEL_MAP: Readonly<Record<BuildInfraLocators, string>>;
export declare const BUILD_INFRA_FORM_FIELDS: Readonly<BuildInfraFormFieldType[]>;
export declare const NUMERIC_BUILD_INFRA_FORM_FIELD_CONFIGURATION_MAP: Readonly<Record<BuildInfraLocators, BuildInfraFormFieldType>>;
export declare const PROFILE_INPUT_ERROR_FIELDS: ProfileInputErrorType;
export declare const CREATE_MODE_REQUIRED_INPUT_FIELDS: BuildInfraMetaConfigTypes[];
export declare const BUILD_INFRA_TEST_IDS: {
    readonly SUBMIT_BUTTON: "build-infra-submit-button";
    readonly CANCEL_BUTTON: "build-infra-cancel-button";
};
export declare const BUILD_INFRA_DEFAULT_PLATFORM_NAME = "runner";
export declare const BUILD_INFRA_LATEST_API_VERSION: BuildInfraAPIVersionType;
export declare const TARGET_PLATFORM_ERROR_FIELDS_MAP: Record<TargetPlatformErrorFields, true>;
export declare const BUILD_INFRA_INHERIT_ACTIONS: Record<`activate_${BuildInfraLocators}` | `de_activate_${BuildInfraLocators}`, BuildInfraLocators>;
export declare const BUILD_INFRA_LOCATOR_CONFIG_TYPES_MAP: Record<BuildInfraLocators, BuildInfraConfigTypes[]>;
export declare const ACTION_TO_PERSISTED_VALUE_MAP: Readonly<Record<RequestLimitConfigType, {
    keyToPersist: keyof Pick<ValidateRequestLimitType, 'limit' | 'request'>;
    keyToPersistConfigType: RequestLimitConfigType;
}>>;
export declare const DEFAULT_TOLERANCE_EFFECT = BuildInfraToleranceEffectType.NO_SCHEDULE;
export declare const DEFAULT_TOLERANCE_OPERATOR = BuildInfraToleranceOperatorType.EQUALS;
export declare const INFRA_CONFIG_NOT_SUPPORTED_BY_BUILD_X: Partial<Record<BuildInfraConfigTypes, true>>;
export declare const INFRA_CONFIG_CONTAINING_SUB_VALUES: Record<InfraConfigWithSubValues, true>;
export declare const INFRA_CONFIG_TO_CM_SECRET_COMPONENT_TYPE_MAP: Partial<Record<BuildInfraConfigTypes, CMSecretComponentType>>;
export declare const CM_SECRET_COMPONENT_TYPE_TO_INFRA_CONFIG_MAP: Partial<Record<CMSecretComponentType, InfraConfigWithSubValues>>;
export declare const CM_SECRET_COMPONENT_TYPE_TO_LOCATOR_MAP: Partial<Record<CMSecretComponentType, BuildInfraLocators.CONFIG_MAP | BuildInfraLocators.SECRET>>;
export declare const USE_BUILD_X_DRIVER_FALLBACK = true;
export declare const BUILD_INFRA_SUB_VALUES_INHERIT_ACTIONS: Record<BuildInfraInheritActionsOnSubValues, true>;
