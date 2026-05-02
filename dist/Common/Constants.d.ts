import { SelectPickerOptionType } from '../Shared/Components';
export declare const FALLBACK_REQUEST_TIMEOUT = 60000;
export declare const Host: string;
export declare const DOCUMENTATION_HOME_PAGE = "https://docs.devtron.ai";
export declare const DEVTRON_HOME_PAGE = "https://devtron.ai/";
export declare const DOCUMENTATION_VERSION = "/devtron/v2.0";
export declare const DISCORD_LINK = "https://discord.devtron.ai/";
export declare const DEFAULT_JSON_SCHEMA_URI = "https://json-schema.org/draft/2020-12/schema";
export declare const LICENSE_DASHBOARD_HOME_PAGE = "https://license.devtron.ai/dashboard";
export declare const DEVTRON_GPT_LINK = "https://chatgpt.com/g/g-6826efa4362c8191b23e7bfa0ac036db-devtron-expert";
export declare const PATTERNS: {
    STRING: RegExp;
    APP_NAME: string;
    DECIMAL_NUMBERS: RegExp;
    POSITIVE_DECIMAL_NUMBERS: RegExp;
    NATURAL_NUMBERS: RegExp;
    KUBERNETES_KEY_PREFIX: RegExp;
    KUBERNETES_KEY_NAME: RegExp;
    START_END_ALPHANUMERIC: RegExp;
    ALPHANUMERIC_WITH_SPECIAL_CHAR: RegExp;
    ESCAPED_CHARACTERS: RegExp;
    NUMBERS_WITH_SCOPE_VARIABLES: RegExp;
    BOOLEAN_WITH_SCOPE_VARIABLES: RegExp;
    ALL_DIGITS_BETWEEN_0_AND_7: RegExp;
    CONFIG_MAP_AND_SECRET_MULTIPLE_KEYS: RegExp;
    CONFIG_MAP_AND_SECRET_KEY: RegExp;
    CONFIGMAP_AND_SECRET_NAME: RegExp;
    ALPHANUMERIC_WITH_SPECIAL_CHAR_AND_SLASH: RegExp;
    EMAIL: RegExp;
};
/** @deprecated */
export declare const URLS: {
    readonly APP_CI_DETAILS: "ci-details";
    readonly LOGS: "Logs";
    readonly APP_DETAILS: "details";
    readonly APP_DETAILS_K8: "k8s-resources";
    readonly EXTERNAL_ARGO_APP: "eaa";
    readonly EXTERNAL_FLUX_APP: "external-flux";
    readonly DETAILS: "/details";
    readonly DEPLOYMENT_HISTORY_CONFIGURATIONS: "configuration";
    readonly APP_CONFIG: "edit";
    readonly APPLICATION_MANAGEMENT_APP: "/application-management/devtron-app";
    readonly GLOBAL_CONFIG_EDIT_CLUSTER: "/global-configuration/cluster-env/edit/:clusterId";
};
export declare const ROUTES: {
    readonly APP: "app";
    readonly ATHENA: "athena";
    readonly APP_ARTIFACT_PROMOTE_MATERIAL: "app/artifact/promotion-request/material";
    readonly APP_TEMPLATE_DATA: "app/template/data";
    readonly ENVIRONMENT_CATEGORIES: "env/categories";
    readonly PROJECT_LIST_MIN: "team/autocomplete";
    readonly USER_CHECK_ROLE: "user/check/roles";
    readonly IMAGE_TAGGING: "app/image-tagging";
    readonly CREATE_RESOURCE: "k8s/resource/create";
    readonly K8S_RESOURCE_CREATE: "k8s/resources/apply";
    readonly CI_CONFIG_GET: "app/ci-pipeline";
    readonly CD_MATERIAL_GET: "app/cd-pipeline";
    readonly DEPLOYMENT_TEMPLATE_LIST: "app/template/list";
    readonly INFRA_CONFIG_PROFILE: "infra-config/profile";
    readonly SCAN_RESULT: "scan-result";
    readonly SCAN_RESULT_RECOMMENDATIONS: "security/scan/dockerfile/results";
    readonly NOTIFIER: "notification";
    readonly TELEMETRY_EVENT: "telemetry/event";
    readonly SERVER_INFO_API: "server";
    readonly ATTRIBUTES_USER: "attributes/user";
    readonly GET: "get";
    readonly UPDATE: "update";
    readonly PATCH: "patch";
    readonly ENVIRONMENT_LIST_MIN: "env/autocomplete";
    readonly CLUSTER: "cluster";
    readonly CLUSTER_MIN: "cluster/min";
    readonly API_RESOURCE: "k8s/api-resources";
    readonly GVK: "gvk";
    readonly NAMESPACE: "env/namespace";
    readonly CLUSTER_NOTE: "cluster/note";
    readonly APPLICATION_NOTE: "app/note";
    readonly GIT_HOST_EVENT: "git/host/event";
    readonly HELM_DEPLOYMENT_STATUS_TIMELINE_INSTALLED_APP: "app-store/deployment-status/timeline";
    readonly DEPLOYMENT_STATUS: "app/deployment-status/timeline";
    readonly MANUAL_SYNC: "app/deployment-status/manual-sync";
    readonly CD_CONFIG: "app/cd-pipeline";
    readonly CONFIG_CD_PIPELINE: "config/cd-pipeline";
    readonly MODULE_CONFIGURED: "module/config";
    readonly RESOURCE_HISTORY_DEPLOYMENT: "resource/history/deployment";
    readonly ATTRIBUTES: "attributes";
    readonly ATTRIBUTES_CREATE: "attributes/create";
    readonly ATTRIBUTES_UPDATE: "attributes/update";
    readonly APP_LIST_MIN: "app/min";
    readonly APP_DETAIL: "app/detail";
    readonly CLUSTER_LIST_MIN: "cluster/autocomplete";
    readonly CLUSTER_LIST_RAW: "k8s/capacity/cluster/list/raw";
    readonly PLUGIN_GLOBAL_LIST_DETAIL_V2: "plugin/global/list/detail/v2";
    readonly PLUGIN_GLOBAL_LIST_V2: "plugin/global/list/v2";
    readonly PLUGIN_GLOBAL_LIST_TAGS: "plugin/global/list/tags";
    readonly PLUGIN_LIST_MIN: "plugin/global/list/v2/min";
    readonly DEPLOYMENT_CHARTS_LIST: "deployment/template/fetch";
    readonly USER_LIST_MIN: "user/list/min";
    readonly CONFIG_DATA: "config/data";
    readonly K8S_RESOURCE: "k8s/resource";
    readonly K8S_RESOURCE_LIST: "k8s/resource/list";
    readonly FILE_UPLOAD: "file/upload";
    readonly PLUGIN_GLOBAL_VARIABLES: "plugin/global/list/global-variable";
    readonly CONFIG_COMPARE_SECRET: "config/compare/secret";
    readonly SCOPED_GLOBAL_VARIABLES: "global/variables";
    readonly CD_TRIGGER_POST: "app/cd-pipeline/trigger";
    readonly DELETE_RESOURCE: "k8s/resource/delete";
    readonly NODE_CAPACITY: "k8s/capacity/node";
    readonly RESOURCE_TEMPLATE: "resource/template";
    readonly ENVIRONMENT_DATA: "global/environment-variables";
    readonly DASHBOARD_EVENT: "dashboard-event";
    readonly LICENSE_DATA: "license/data";
    readonly ENV: "env";
    readonly APP_METADATA: "app-metadata";
    readonly RESOURCE_CONFLICTS_LIST: "app/:appId/cd-pipeline/:pipelineId/history/:wfrId/helm-ownership-conflicts";
    readonly GIT_PROVIDER_MIN: "git/provider/autocomplete";
    readonly DOCKER_REGISTRY_MIN: "docker/registry/autocomplete";
};
export declare enum KEY_VALUE {
    KEY = "key",
    VALUE = "value"
}
export declare const DEFAULT_TAG_DATA: {
    key: string;
    value: string;
    propagate: boolean;
    isInvalidKey: boolean;
    isInvalidValue: boolean;
    isSuggested: boolean;
};
export declare enum ERROR_STATUS_CODE {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PERMISSION_DENIED = 403,
    NOT_FOUND = 404,
    EXPECTATION_FAILED = 417,
    INTERNAL_SERVER_ERROR = 500,
    BAD_GATEWAY = 502,
    SERVICE_TEMPORARY_UNAVAILABLE = 503
}
export declare const TOAST_ACCESS_DENIED: {
    TITLE: string;
    SUBTITLE: string;
};
export declare const ERROR_EMPTY_SCREEN: {
    PAGE_NOT_FOUND: string;
    PAGE_NOT_EXIST: string;
    TAKE_BACK_HOME: string;
    REPORT_ISSUE: string;
    ONLY_FOR_SUPERADMIN: string;
    NOT_AUTHORIZED: string;
    REQUIRED_MANAGER_ACCESS: string;
    BAD_REQUEST: string;
    BAD_REQUEST_MESSAGE: string;
    TRY_AGAIN: string;
    UNAUTHORIZED: string;
    UNAUTHORIZED_MESSAGE: string;
    FORBIDDEN: string;
    FORBIDDEN_MESSAGE: string;
    INTERNAL_SERVER_ERROR: string;
    INTERNAL_SERVER_ERROR_MESSAGE: string;
    BAD_GATEWAY: string;
    BAD_GATEWAY_MESSAGE: string;
    SERVICE_TEMPORARY_UNAVAILABLE: string;
    SERVICE_TEMPORARY_UNAVAILABLE_MESSAGE: string;
};
export declare const TOKEN_COOKIE_NAME = "argocd.token";
export declare const TriggerTypeMap: {
    automatic: string;
    manual: string;
};
export declare const BuildStageVariable: {
    PreBuild: string;
    Build: string;
    PostBuild: string;
};
export declare const RepositoryAction: {
    CONTAINER: string;
    CHART_PULL: string;
    CHART_PUSH: string;
};
export declare enum MODES {
    YAML = "yaml",
    JSON = "json",
    SHELL = "shell",
    DOCKERFILE = "dockerfile",
    PLAINTEXT = "plaintext"
}
export declare enum APPROVAL_MODAL_TYPE {
    CONFIG = "CONFIG",
    DEPLOYMENT = "DEPLOYMENT",
    IMAGE_PROMOTION = "IMAGE-PROMOTION"
}
export declare const MAX_Z_INDEX = 2147483647;
export declare const SELECTED_APPROVAL_TAB_STATE: {
    APPROVAL: string;
    PENDING: string;
};
export declare enum SortingOrder {
    /**
     * Ascending order
     */
    ASC = "ASC",
    /**
     * Descending order
     */
    DESC = "DESC"
}
/**
 * Base page size for pagination
 */
export declare const DEFAULT_BASE_PAGE_SIZE = 20;
/**
 * Deployment Window
 */
export declare enum MODAL_TYPE {
    HIBERNATE = "HIBERNATE",
    UNHIBERNATE = "UNHIBERNATE",
    RESTORE = "RESTORE",
    DEPLOY = "DEPLOY",
    RESOURCE = "RESOURCE",
    RESTART = "RESTART",
    PIPELINE = "PIPELINE",
    OVERVIEW = "OVERVIEW",
    APP_DETAILS_STATUS = "APP_DETAILS_STATUS"
}
export declare enum ACTION_STATE {
    ALLOWED = "ALLOWED",
    PARTIAL = "PARTIAL",
    BLOCKED = "BLOCKED"
}
export declare enum DEPLOYMENT_WINDOW_TYPE {
    MAINTENANCE = "MAINTENANCE",
    BLACKOUT = "BLACKOUT"
}
export declare const arrowUnicode = "\u279D";
export declare enum WEEK_DAYS_ENUM {
    SUNDAY = "SUNDAY",
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY"
}
export declare enum FREQUENCY_ENUM {
    FIXED = "FIXED",
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    YEARLY = "YEARLY",
    WEEKLY_RANGE = "WEEKLY_RANGE"
}
export declare function getOrdinal(number: any): string;
export declare const TIME_HOUR_SUFFIX_FOR_12_HOUR_FORMAT: {
    AM: string;
    PM: string;
    MIDNIGHT: string;
    NOON: string;
};
export declare const getTimeStampAMPMSuffix: (time: string) => string;
export declare enum ReactSelectInputAction {
    inputChange = "input-change",
    selectOption = "select-option",
    deselectOption = "deselect-option",
    removeValue = "remove-value",
    inputBlur = "input-blur"
}
export declare const ZERO_TIME_STRING = "0001-01-01T00:00:00Z";
export declare const EXCLUDED_FALSY_VALUES: readonly [any, any, "", number];
export declare const API_STATUS_CODES: {
    OK: number;
    NO_CONTENT: number;
    BAD_REQUEST: number;
    UNAUTHORIZED: number;
    PERMISSION_DENIED: number;
    NOT_FOUND: number;
    REQUEST_TIMEOUT: number;
    CONFLICT: number;
    PRE_CONDITION_FAILED: number;
    EXPECTATION_FAILED: number;
    UNPROCESSABLE_ENTITY: number;
    LOCKED: number;
    FAILED_DEPENDENCY: number;
};
export declare enum SERVER_MODE {
    EA_ONLY = "EA_ONLY",
    FULL = "FULL"
}
export declare const POSTHOG_EVENT_ONBOARDING: {
    PREVIEW: string;
    DEPLOY_CUSTOM_APP_CI_CD: string;
    INSTALL_CUSTOM_CI_CD: string;
    VIEW_APPLICATION: string;
    BROWSE_HELM_CHART: string;
    CONNECT_CLUSTER: string;
    CONNECT_CHART_REPOSITORY: string;
    TOOLTIP_OKAY: string;
    TOOLTIP_DONT_SHOW_AGAIN: string;
    HELP: string;
    SKIP_AND_EXPLORE_DEVTRON: string;
};
export declare const MAX_LOGIN_COUNT = 5;
export declare const LOGIN_COUNT = "login-count";
export declare const DEFAULT_ENV = "devtron-ci";
export declare const DATE_TIME_FORMATS: {
    TWELVE_HOURS_FORMAT: string;
    TWELVE_HOURS_FORMAT_WITHOUT_WEEKDAY: string;
    TWELVE_HOURS_EXPORT_FORMAT: string;
    DD_MMM_YYYY_HH_MM: string;
    DD_MMM_YYYY: string;
    'DD/MM/YYYY': string;
    DD_MMM: string;
    TWENTY_FOUR_HOUR_FORMAT_HOUR: string;
    ABBREVIATED_MONTH: string;
    DATE_WITH_ABBREVIATED_MONTH: string;
    WEEKDAY_WITH_DATE_MONTH_AND_YEAR: string;
    WEEKDAY_DATE_MONTH_YEAR_AND_HOUR: string;
    DAY_OF_MONTH_WITH_ORDINAL: string;
    ABBREVIATED_WEEKDAY: string;
    DAY_OF_MONTH: string;
};
export declare const SEMANTIC_VERSION_DOCUMENTATION_LINK = "https://semver.org/";
export declare const VULNERABILITIES_SORT_PRIORITY: {
    critical: number;
    high: number;
    medium: number;
    low: number;
    unknown: number;
};
export declare const IS_PLATFORM_MAC_OS: boolean;
/**
 * Git provider types
 */
export declare enum GitProviderType {
    GITHUB = "github",
    GITLAB = "gitlab",
    BITBUCKET = "bitbucket",
    AZURE = "azure",
    GITEA = "gitea",
    GIT = "git"
}
/**
 * Formats the schema removing any irregularity in the existing schema
 */
export declare const getFormattedSchema: (schema?: string) => string;
export declare const UNCHANGED_ARRAY_ELEMENT_SYMBOL: unique symbol;
/**
 * Authorization config types for SSO Login
 */
export declare enum SSOProvider {
    google = "google",
    github = "github",
    gitlab = "gitlab",
    microsoft = "microsoft",
    ldap = "ldap",
    oidc = "oidc",
    openshift = "openshift"
}
export declare const BULK_DEPLOY_LATEST_IMAGE_TAG: SelectPickerOptionType<string>;
export declare const BULK_DEPLOY_ACTIVE_IMAGE_TAG: SelectPickerOptionType<string>;
