import { DeploymentNodeType, OptionType } from '../Common/Types';
import { InfoBlockProps } from './Components';
import { CDMaterialSidebarType, ConfigKeysWithLockType, ConfigurationType, DeploymentStrategyTypeWithDefault, IconBaseColorType, RemoteConnectionType } from './types';
export declare const ARTIFACT_STATUS: {
    PROGRESSING: string;
    DEGRADED: string;
    FAILED: string;
};
export declare const STAGE_TYPE: {
    CD: string;
    CI: string;
    GIT: string;
    PRECD: string;
    POSTCD: string;
    ROLLBACK: string;
};
export declare const IMAGE_SCAN_TOOL: {
    Clair: string;
    Trivy: string;
};
export declare const EXCLUDED_IMAGE_TOOLTIP = "This image is excluded for new deployment as it does not match the filter conditions configured for this environment.";
export declare const ModuleNameMap: {
    ARGO_CD: string;
    CICD: string;
    SECURITY: string;
    BLOB_STORAGE: string;
    GRAFANA: string;
    NOTIFICATION: string;
    SECURITY_TRIVY: string;
    SECURITY_CLAIR: string;
};
export declare const DATE_TIME_FORMAT_STRING = "ddd DD MMM YYYY HH:mm:ss";
export declare const API_TOKEN_PREFIX = "API-TOKEN:";
export declare const DEFAULT_SECRET_PLACEHOLDER = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
export declare enum PatchOperationType {
    add = "add",
    replace = "replace",
    remove = "remove"
}
export declare enum DeploymentStageType {
    PRE = "PRE",
    DEPLOY = "DEPLOY",
    POST = "POST"
}
export declare enum DeploymentWithConfigType {
    LAST_SAVED_CONFIG = "LAST_SAVED_CONFIG",
    LATEST_TRIGGER_CONFIG = "LATEST_TRIGGER_CONFIG",
    SPECIFIC_TRIGGER_CONFIG = "SPECIFIC_TRIGGER_CONFIG"
}
export declare enum EnvironmentTypeEnum {
    production = "Production",
    nonProduction = "Non-Production"
}
/**
 * Constants for NO MATCHING result
 */
export declare const NO_MATCHING_RESULT = "No matching results";
/**
 * Constants for TYPE 3 CHARACTERS
 */
export declare const TYPE_3_CHARACTERS_TO_SEE_MATCHING_RESULTS = "Type 3 chars to see matching results";
/**
 * Constants for TYPE TO SEE MATCHING RESULTS
 */
export declare const TYPE_TO_SEE_MATCHING_RESULTS = "Type to see matching results";
export declare const EMPTY_STATE_STATUS: {
    DATA_NOT_AVAILABLE: string;
    API_TOKEN: {
        TITLE: string;
        SUBTITLE: string;
    };
    ARTIFACTS_EMPTY_STATE_TEXTS: {
        NoFilesFound: string;
        BlobStorageNotConfigured: string;
        StoreFiles: string;
        ConfigureBlobStorage: string;
        NoFilesGenerated: string;
        NoArtifactsGenerated: string;
        NoArtifactsError: string;
        FailedToFetchArtifacts: string;
        FailedToFetchArtifactsError: string;
        NoArtifactsFound: string;
        NoArtifactsFoundError: string;
    };
    CI_BUILD_HISTORY_PIPELINE_TRIGGER: {
        TITLE: string;
        SUBTITLE: string;
    };
    CI_BUILD_HISTORY_LINKED_PIPELINE: {
        TITLE: string;
        SUBTITLE: string;
    };
    CI_BUILD_HISTORY_NO_PIPELINE: {
        TITLE: string;
        SUBTITLE: string;
    };
    CI_DEATILS_NO_VULNERABILITY_FOUND: {
        TITLE: string;
        SUBTITLE: string;
    };
    CI_DETAILS_IMAGE_SCANNED_DISABLED: string;
    CI_DETAILS_IMAGE_NOT_SCANNED: {
        TITLE: string;
        SUBTITLE: string;
    };
    CD_DETAILS_NO_ENVIRONMENT: {
        TITLE: string;
        SUBTITLE: string;
    };
    CD_DETAILS_NO_DEPLOYMENT: {
        TITLE: string;
        SUBTITLE: string;
    };
    CHART: {
        NO_SOURCE_TITLE: string;
        NO_CHART_FOUND: string;
    };
    CHART_DEPLOYMENT_HISTORY: {
        SUBTITLE: string;
    };
    CHART_GROUP_DEPLOYMENT: {
        TITLE: string;
        SUBTITLE: string;
    };
    DEPLOYMENT_DETAILS_SETPS_FAILED: {
        TITLE: string;
        SUBTITLE: string;
    };
    DEPLOYMENT_DETAILS_SETPS_PROGRESSING: {
        TITLE: string;
        SUBTITLE: string;
    };
    DEVTRON_APP_DEPLOYMENT_HISTORY_SOURCE_CODE: {
        SUBTITLE: string;
    };
    DEPLOYMENT_HISTORY_CONFIG_LIST: {
        SUBTITLE: string;
    };
    GENERATE_API_TOKEN: {
        TITLE: string;
        SUBTITLE: string;
    };
    TRIGGER_URL: {
        TITLE: string;
        SUBTITLE: string;
    };
    CD_EMPTY_STATE: {
        TITLE: string;
        SUBTITLE: string;
    };
    CI_PROGRESS_VIEW: {
        TITLE: string;
        SUBTITLE: string;
    };
    RENDER_EMPTY_STATE: {
        TITILE: string;
        SUBTITLE: string;
    };
    RENDER_NO_ENVIORNMENT_STATE: {
        TITLE: string;
        SUBTITLE: string;
    };
    RENDER_SELECT_ENVIRONMENT_VIEW: {
        TITLE: string;
        SUBTITLE: string;
    };
    SAVED_VALUES_EMPTY_STATE: {
        TITLE: string;
        SUBTITLE: string;
    };
    LOADING_CLUSTER: {
        TITLE: string;
        SUBTITLE: string;
    };
    NO_MATCHING_RESULT: {
        TITLE: string;
        SUBTITLE: string;
    };
    CLUSTER_NODE_EMPTY_STATE: {
        TITLE: string;
        SUBTITLE: string;
    };
    CHART_EMPTY_STATE: {
        TITLE: string;
        SUBTITLE: string;
    };
    CHART_VALUES_GUIT_VIEW: {
        SUBTITLE: string;
    };
    DEVTRON_STACK_MANAGER: {
        TITLE: string;
        SUBTITLE: string;
    };
    NO_GROUPS: {
        TITLE: string;
        SUBTITLE: string;
    };
    NO_USER: {
        TITLE: string;
        SUBTITLE: string;
    };
    RENDER_LIST: {
        SUBTITLE: string;
    };
    CUSTOM_CHART_LIST: {
        TITLE: string;
    };
    BULK_ACTION_EDITS: {
        TITLE: string;
        SUBTITLE: string;
    };
    SECURITY_SCANS: {
        TITLE: string;
        SUBTITLE: string;
    };
    NOTIFICATION_TAB: {
        TITLE: string;
        SUBTITL: string;
    };
    CONFIGURATION_TAB: {
        TITLE: string;
    };
    EXTERNAL_LINK_COMPONENT: {
        TITLE: string;
        SUBTITLE: string;
    };
    CD_MATERIAL: {
        TITLE: string;
    };
    CI_DETAILS_NOT_FOUND: {
        TITLE: string;
        SUBTITLE: string;
    };
    TRIGGER_NOT_FOUND: {
        TITLE: string;
        SUBTITLE: string;
    };
    OVERVIEW: {
        DEPLOYMENT_TITLE: string;
        DEPLOYMENT_SUB_TITLE: string;
        APP_DESCRIPTION: string;
        JOB_DESCRIPTION: string;
    };
};
export declare const DEPLOYMENT_HISTORY_CONFIGURATION_LIST_MAP: {
    DEPLOYMENT_TEMPLATE: {
        DISPLAY_NAME: string;
        VALUE: string;
    };
    PIPELINE_STRATEGY: {
        DISPLAY_NAME: string;
        VALUE: string;
    };
    CONFIGMAP: {
        DISPLAY_NAME: string;
        VALUE: string;
    };
    SECRET: {
        DISPLAY_NAME: string;
        VALUE: string;
    };
};
export declare const EXTERNAL_TYPES: {
    [x: string]: {
        '': string;
        KubernetesSecret: string;
        AWSSecretsManager: string;
        AWSSystemManager: string;
        HashiCorpVault: string;
        ESO_HashiCorpVault: string;
        ESO_AWSSecretsManager: string;
        ESO_GoogleSecretsManager: string;
        ESO_AzureSecretsManager: string;
        KubernetesConfigMap?: undefined;
    } | {
        '': string;
        KubernetesConfigMap: string;
        KubernetesSecret?: undefined;
        AWSSecretsManager?: undefined;
        AWSSystemManager?: undefined;
        HashiCorpVault?: undefined;
        ESO_HashiCorpVault?: undefined;
        ESO_AWSSecretsManager?: undefined;
        ESO_GoogleSecretsManager?: undefined;
        ESO_AzureSecretsManager?: undefined;
    };
};
export declare const DEPLOYMENT_STATUS: {
    readonly SUCCEEDED: "succeeded";
    readonly HEALTHY: "healthy";
    readonly FAILED: "failed";
    readonly TIMED_OUT: "timed_out";
    readonly UNABLE_TO_FETCH: "unable_to_fetch";
    readonly INPROGRESS: "inprogress";
    readonly PROGRESSING: "progressing";
    readonly STARTING: "starting";
    readonly INITIATING: "initiating";
    readonly SUPERSEDED: "superseded";
    readonly QUEUED: "queued";
    readonly UNKNOWN: "unknown";
    readonly CHECKING: "checking";
};
export declare const statusIcon: {
    failed: string;
    queued: string;
    suspended: string;
    starting: string;
    initiating: string;
    unknown: string;
    degraded: string;
    healthy: string;
    notdeployed: string;
    missing: string;
    progressing: string;
    deploymentinitiated: string;
    hibernating: string;
    succeeded: string;
    timedout: string;
    unabletofetch: string;
};
export declare const APP_STATUS_HEADERS: string[];
export declare const MATERIAL_EXCLUDE_TIPPY_TEXT = "Not available for build as this commit contains changes in excluded files or folders";
export declare const AppListConstants: {
    SAMPLE_NODE_REPO_URL: string;
    AppTabs: {
        DEVTRON_APPS: string;
        HELM_APPS: string;
        ARGO_APPS: string;
        FLUX_APPS: string;
    };
};
export declare enum K8sResourcePayloadAppType {
    DEVTRON_APP = 0,
    HELM_APP = 1,
    EXTERNAL_ARGO_APP = 2,
    EXTERNAL_FLUX_APP = 3
}
export declare const ANSI_UP_REGEX: RegExp;
/**
 * Size variants for components
 */
export declare enum ComponentSizeType {
    xxs_small_icon = "xxs-small-icon",
    xxxs = "xxxs",
    xxs = "xxs",
    xs = "xs",
    small = "small",
    medium = "medium",
    large = "large",
    xl = "xl"
}
export declare const COMPONENT_SIZE_TYPE_TO_FONT_AND_BLOCK_PADDING_MAP: Record<ComponentSizeType, string>;
export declare const COMPONENT_SIZE_TYPE_TO_INLINE_PADDING_MAP: Record<ComponentSizeType, string>;
export declare const COMPONENT_SIZE_TYPE_TO_ICON_SIZE_MAP: Record<ComponentSizeType, number>;
export declare const POP_UP_MENU_MODAL_ID = "popup";
/**
 * Identifiers for grouped / all resources
 */
export declare enum SelectAllGroupedResourceIdentifiers {
    allProjects = "-1",
    allExistingAndFutureNonProdEnvironments = "-1",
    allExistingAndFutureProdEnvironments = "-2",
    allExistingAndFutureEnvironments = "-3"
}
export declare const CD_MATERIAL_SIDEBAR_TABS: OptionType<CDMaterialSidebarType, CDMaterialSidebarType>[];
export declare const TRIGGER_STATUS_PROGRESSING: string[];
export declare const CONFIGURATION_TYPE_VALUES: ConfigurationType[];
export declare const DEFAULT_LOCKED_KEYS_CONFIG: Readonly<ConfigKeysWithLockType>;
export declare const ALL_RESOURCE_KIND_FILTER = "all";
export declare const OPEN_NEW_TICKET = "https://enterprise.devtron.ai/portal/en/newticket";
export declare const VIEW_ALL_TICKETS = "https://enterprise.devtron.ai/portal/en/myarea";
export declare const RAISE_ISSUE = "https://github.com/devtron-labs/devtron/issues/new/choose";
export declare const TARGET_IDS: {
    WORKFLOW_EDITOR_CONTAINER: string;
};
/**
 * Env ID to get the data for base configuration
 */
export declare const BASE_CONFIGURATION_ENV_ID = -1;
export declare const DEVTRON_BASE_MAIN_ID = "devtron-base-main-identifier";
export declare const SKIP_LABEL_KEY_VALIDATION_PREFIX = "devtron.ai/";
export declare const UNSAVED_CHANGES_PROMPT_MESSAGE = "You have unsaved changes. Are you sure you want to leave?";
export declare const DEFAULT_ROUTE_PROMPT_MESSAGE = "Please don't wander off! Reloading or going back might disrupt the ongoing operation.";
export declare const DC_DELETE_SUBTITLES: {
    DELETE_ENVIRONMENT_SUBTITLE: string;
    DELETE_CLUSTER_SUBTITLES: string;
};
export declare const EULA_LINK = "https://devtron.ai/end-user-license-agreement-eula";
export declare const CONTACT_SUPPORT_LINK = "https://devtron.ai/enterprise-support";
export declare const PRIVACY_POLICY_LINK = "https://devtron.ai/privacy-policy";
export declare const TERMS_OF_USE_LINK = "https://devtron.ai/terms-of-use";
export declare const CONTACT_SALES_LINK = "https://devtron.ai/contact-sales";
export declare const enum DeleteComponentsName {
    Cluster = "cluster",
    Job = "job pipeline",
    BuildPipeline = "build pipeline"
}
export declare const Routes: {
    CI_PIPELINE_PATCH: string;
    WORKFLOW: string;
};
export declare const ENTERPRISE_SUPPORT_LINK = "enterprise@devtron.ai";
export declare const INVALID_LICENSE_KEY = "inValid";
export declare enum InfoBlockVariant {
    ERROR = "error",
    HELP = "help",
    INFORMATION = "information",
    SUCCESS = "success",
    WARNING = "warning",
    NEUTRAL = "neutral"
}
export type InfoBlockVariantType = 'error' | 'help' | 'information' | 'success' | 'warning' | 'neutral';
export declare const VARIANT_TO_BG_MAP: Record<InfoBlockProps['variant'], string>;
export declare const VARIANT_TO_ICON_COLOR_MAP: Record<InfoBlockProps['variant'], IconBaseColorType>;
export declare const VARIANT_TO_BORDER_MAP: Record<InfoBlockProps['variant'], string>;
export declare const DEPLOYMENT_STAGE_TO_NODE_MAP: Readonly<Record<DeploymentStageType, DeploymentNodeType>>;
export declare const APP_DETAILS_FALLBACK_POLLING_INTERVAL = 30000;
export declare const PROGRESSING_DEPLOYMENT_STATUS_POLLING_INTERVAL = 10000;
export declare const STRATEGY_TYPE_TO_TITLE_MAP: Record<DeploymentStrategyTypeWithDefault, string>;
export declare const CUBIC_BEZIER_CURVE: [number, number, number, number];
export declare const ALLOW_ACTION_OUTSIDE_FOCUS_TRAP = "allow-action-outside-focus-trap";
export declare const LICENSE_KEY_QUERY_PARAM = "licenseKey";
export declare const REMOTE_CONNECTION_TYPE_LABEL_MAP: Record<RemoteConnectionType, string>;
export declare const TARGET_K8S_VERSION_SEARCH_KEY = "targetK8sVersion";
