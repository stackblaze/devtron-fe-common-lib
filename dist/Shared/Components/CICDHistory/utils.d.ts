import { JSX, ReactElement } from 'react';
import { DeploymentAppTypes } from '../../../Common/Types';
import { DeploymentStatusBreakdownItemType, Node } from '../../types';
import { TabGroupProps } from '../TabGroup';
import { DeploymentHistoryResultObject, ExecutionInfoType, History, NodeFilters, NodeStatus, StageStatusType, TriggerHistoryFilterCriteriaProps, TriggerHistoryFilterCriteriaType, WorkflowExecutionStagesMapDTO, WorkflowStageStatusType } from './types';
export declare const getTriggerHistoryFilterCriteria: ({ appId, envId, releaseId, showCurrentReleaseDeployments, }: TriggerHistoryFilterCriteriaProps) => TriggerHistoryFilterCriteriaType;
export declare const getParsedTriggerHistory: (result: any) => DeploymentHistoryResultObject;
export declare const buildHoverHtmlForWebhook: (eventName: any, condition: any, selectors: any) => import("react/jsx-runtime").JSX.Element;
export declare const getStageStatusIcon: (status: StageStatusType) => JSX.Element;
export declare const getLogSearchIndex: ({ stageIndex, lineNumberInsideStage, }: Record<"stageIndex" | "lineNumberInsideStage", number>) => string;
export declare const sanitizeWorkflowExecutionStages: (workflowExecutionStages: WorkflowExecutionStagesMapDTO["workflowExecutionStages"]) => ExecutionInfoType | null;
export declare const getIconFromWorkflowStageStatusType: (status: WorkflowStageStatusType) => ReactElement;
export declare const getHistoryItemStatusIconFromWorkflowStages: (workflowExecutionStages: WorkflowExecutionStagesMapDTO["workflowExecutionStages"]) => ReactElement;
export declare const getWorkerPodBaseUrl: (clusterId?: number, podNamespace?: string) => string;
export declare const getWorkflowNodeStatusTitle: (status: string) => string;
export declare const getFormattedTriggerTime: (time: string) => string;
export declare const getNodesCount: (nodes: Node[]) => {
    allNodeCount: number;
    healthyNodeCount: number;
    progressingNodeCount: number;
    failedNodeCount: number;
    missingNodeCount: number;
    driftedNodeCount: number;
};
export declare const getStatusFilters: ({ allNodeCount, missingNodeCount, failedNodeCount, progressingNodeCount, healthyNodeCount, driftedNodeCount, }: ReturnType<typeof getNodesCount>) => {
    allResourceKindFilter: {
        status: string;
        count: number;
    };
    statusFilters: ({
        status: NodeStatus;
        count: number;
    } | {
        status: NodeFilters;
        count: number;
    })[];
};
export declare const getAppStatusIcon: (status: NodeStatus | NodeFilters, hideMessage?: boolean) => import("react/jsx-runtime").JSX.Element;
export declare const getTriggerStatusIcon: (status: string) => string;
export declare const renderDeploymentTimelineIcon: (iconState: DeploymentStatusBreakdownItemType["icon"]) => JSX.Element;
export declare const getDeploymentTimelineBGColorFromIcon: (icon: DeploymentStatusBreakdownItemType["icon"]) => string;
export declare const getTriggerOutputTabs: (triggerDetails: History, deploymentAppType: DeploymentAppTypes) => TabGroupProps["tabs"];
export declare const getSortedTriggerHistory: (triggerHistory: Map<number, History>) => [number, History][];
