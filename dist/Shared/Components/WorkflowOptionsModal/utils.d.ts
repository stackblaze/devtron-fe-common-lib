import { PipelineType, WorkflowNodeType } from '../../../Common/Types';
import { ChangeCIPayloadType, CIPipelineNodeType } from '../../types';
import { SourceTypeCardProps, WorkflowOptionsModalProps } from './types';
export declare const getSwitchToWebhookPayload: (changeCIPayload: ChangeCIPayloadType) => {
    appId: number;
    pipelines: {
        name: string;
        triggertype: "MANUAL";
        appWorkflowId: number;
        environmentId: number;
        id: number;
        parentPipelineType: PipelineType;
        switchFromCiPipelineId: number;
    }[];
};
export declare const getCurrentPipelineType: ({ workflows, changeCIPayload, }: Required<Pick<WorkflowOptionsModalProps, "workflows" | "changeCIPayload">>) => SourceTypeCardProps["type"];
export declare const getBuildWorkflowCardsConfig: ({ currentPipelineType, changeCIPayload, isAppGroup, }: {
    currentPipelineType: CIPipelineNodeType | WorkflowNodeType.WEBHOOK;
} & Required<Pick<WorkflowOptionsModalProps, "changeCIPayload" | "isAppGroup">>) => Pick<SourceTypeCardProps, "disabled" | "dataTestId" | "type" | "title" | "subtitle" | "icons">[];
export declare const getReceiveWorkflowCardsConfig: ({ currentPipelineType, linkedCDSourceVariant, isAppGroup, }: {
    currentPipelineType: CIPipelineNodeType | WorkflowNodeType.WEBHOOK;
} & Required<Pick<WorkflowOptionsModalProps, "linkedCDSourceVariant" | "isAppGroup">>) => Pick<SourceTypeCardProps, "disabled" | "dataTestId" | "type" | "title" | "subtitle" | "icons">[];
export declare const getJobWorkflowCardsConfig: ({ currentPipelineType, isAppGroup, }: {
    currentPipelineType: CIPipelineNodeType | WorkflowNodeType.WEBHOOK;
} & Required<Pick<WorkflowOptionsModalProps, "isAppGroup">>) => Pick<SourceTypeCardProps, "disabled" | "dataTestId" | "type" | "title" | "subtitle" | "icons">[];
