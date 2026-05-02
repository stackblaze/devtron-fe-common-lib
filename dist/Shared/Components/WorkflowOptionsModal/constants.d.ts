import { WorkflowNodeType } from '../../../Common/Types';
import { CIPipelineNodeType } from '../../types';
export declare const SOURCE_TYPE_CARD_VARIANTS: {
    BUILD: {
        BUILD_AND_DEPLOY_FROM_SOURCE_CODE: {
            title: string;
            subtitle: string;
            dataTestId: string;
            type: CIPipelineNodeType.CI_CD;
            icons: ({
                name: "ic-git-branch";
                color: "N700";
            } | {
                name: "ic-build-color";
                color: any;
            } | {
                name: "ic-deploy-color";
                color: any;
            })[];
        };
        BUILD_FROM_SOURCE_CODE: {
            title: string;
            subtitle: string;
            dataTestId: string;
            type: CIPipelineNodeType.CI;
            icons: ({
                name: "ic-git-branch";
                color: "N700";
            } | {
                name: "ic-build-color";
                color: any;
            })[];
        };
        JOB: {
            title: string;
            subtitle: string;
            dataTestId: string;
            type: CIPipelineNodeType.JOB_CI;
            icons: {
                name: "ic-job-color";
                color: any;
            }[];
        };
    };
    RECEIVE: {
        EXTERNAL_SERVICE: {
            title: string;
            subtitle: string;
            dataTestId: string;
            type: WorkflowNodeType.WEBHOOK;
            icons: ({
                name: "ic-webhook";
                color: any;
            } | {
                name: "ic-deploy-color";
                color: any;
            })[];
        };
        LINKED_PIPELINE: {
            title: string;
            subtitle: string;
            dataTestId: string;
            type: CIPipelineNodeType.LINKED_CI;
            icons: {
                name: "ic-linked-build-color";
                color: any;
            }[];
        };
    };
    JOB: {
        JOB: {
            title: string;
            subtitle: string;
            dataTestId: string;
            type: CIPipelineNodeType.JOB_CI;
            icons: {
                name: "ic-job-color";
                color: any;
            }[];
        };
    };
};
export declare const NO_ENV_FOUND = "No environment found. Please create a CD Pipeline first.";
export declare const REQUEST_IN_PROGRESS = "Request in progress";
export declare const TOAST_MESSAGES: {
    SUCCESS_CHANGE_TO_WEBHOOK: string;
    WORKFLOW_NOT_AVAILABLE: string;
};
