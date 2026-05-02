import { FiltersTypeEnum, TableProps } from '../Table';
import { ResourceConflictItemType, WorkflowStageStatusType } from './types';
export declare const HISTORY_LABEL: {
    APPLICATION: string;
    ENVIRONMENT: string;
    PIPELINE: string;
};
export declare const FILTER_STYLE: {
    control: (base: any) => any;
    dropdownIndicator: (base: any) => any;
    menuPortal: (base: any) => any;
    menu: (base: any, state: any) => any;
    option: (base: any, state: any) => any;
    container: (base: any, state: any) => any;
    valueContainer: (base: any, state: any) => any;
    singleValue: (base: any) => any;
    input: (base: any) => any;
};
export declare const GIT_BRANCH_NOT_CONFIGURED = "Not Configured";
export declare const DEFAULT_GIT_BRANCH_VALUE = "--";
export declare const TERMINAL_STATUS_MAP: {
    SUCCEEDED: string;
    HEALTHY: string;
    RUNNING: string;
    PROGRESSING: string;
    STARTING: string;
    INITIATING: string;
    QUEUED: string;
    FAILED: string;
    ERROR: string;
    CANCELLED: string;
    UNABLE_TO_FETCH: string;
    TIMED_OUT: string;
    WAITING_TO_START: string;
};
export declare const EVENT_STREAM_EVENTS_MAP: {
    MESSAGE: string;
    START_OF_STREAM: string;
    END_OF_STREAM: string;
    ERROR: string;
};
export declare const POD_STATUS: {
    PENDING: string;
};
export declare const TIMEOUT_VALUE = "1";
export declare const DEFAULT_CLUSTER_ID = 1;
export declare const DEFAULT_NAMESPACE = "devtron-ci";
export declare const DEFAULT_ENV = "devtron-ci";
export declare const LOGS_RETRY_COUNT = 3;
export declare const DEPLOYMENT_STATUS_QUERY_PARAM = "deployment-status";
export declare const MANIFEST_STATUS_HEADERS: string[];
export declare const LOGS_STAGE_IDENTIFIER = "STAGE_INFO";
export declare const LOGS_STAGE_STREAM_SEPARATOR = "|";
export declare const statusColor: {
    [x: string]: string;
    suspended: string;
    unknown: string;
    queued: string;
    degraded: string;
    healthy: string;
    notdeployed: string;
    missing: string;
    progressing: string;
    initiating: string;
    starting: string;
    succeeded: string;
    running: string;
    failed: string;
    error: string;
    cancelled: string;
    aborted: string;
    timedout: string;
    unabletofetch: string;
    hibernating: string;
};
export declare const PULSATING_STATUS_MAP: {
    [key in keyof typeof statusColor]?: boolean;
};
export declare const WORKFLOW_STAGE_STATUS_TO_TEXT_MAP: Record<WorkflowStageStatusType, string>;
export declare const EXECUTION_FINISHED_TEXT_MAP: Partial<Record<WorkflowStageStatusType, string>>;
export declare const TERMINAL_STATUS_COLOR_CLASS_MAP: {
    readonly [x: string]: "cr-5" | "cg-5" | "co-5";
};
export declare const PROGRESSING_STATUS: {
    readonly [x: string]: "progressing" | "starting" | "initiating" | "queued" | "running";
};
export declare const FAILED_WORKFLOW_STAGE_STATUS_MAP: Record<Extract<WorkflowStageStatusType, WorkflowStageStatusType.ABORTED | WorkflowStageStatusType.FAILED | WorkflowStageStatusType.TIMEOUT>, true>;
export declare const APP_HEALTH_DROP_DOWN_LIST: string[];
export declare const RESOURCE_CONFLICT_DEPLOY_ERROR = "cannot be imported into the current release: invalid ownership metadata;";
export declare const CONFLICTED_RESOURCES_COLUMNS: TableProps<ResourceConflictItemType, FiltersTypeEnum.STATE>['columns'];
