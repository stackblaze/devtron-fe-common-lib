import { ResponseType } from '../../../Common';
import { DeploymentHistoryDetail, DeploymentHistoryResult, DeploymentStatusDetailsResponse, GetResourceConflictDetailsParamsType, ModuleConfigResponse, ResourceConflictItemType, ResourceConflictRedeployParamsType, TriggerDetailsResponseType, TriggerHistoryParamsType } from './types';
export declare function getTriggerDetails({ appId, envId, pipelineId, triggerId, fetchIdData, }: {
    appId: any;
    envId: any;
    pipelineId: any;
    triggerId: any;
    fetchIdData: any;
}): Promise<TriggerDetailsResponseType>;
export declare const getTagDetails: (params: any) => Promise<ResponseType<any>>;
export declare const cancelCiTrigger: (params: any, isForceAbort: any) => Promise<ResponseType<any>>;
export declare const cancelPrePostCdTrigger: (pipelineId: any, workflowRunner: any, isForceAbort: boolean) => Promise<ResponseType<any>>;
/**
 * @deprecated
 */
export declare function getDeploymentStatusDetail(appId: string, envId: string, showTimeline: boolean, triggerId?: string, isHelmApps?: boolean, installedAppVersionHistoryId?: number): Promise<DeploymentStatusDetailsResponse>;
export declare function getManualSync(params: {
    appId: string;
    envId: string;
}): Promise<ResponseType>;
export declare const prepareHistoryData: (rawData: any, historyComponent: string, skipDecode?: boolean) => DeploymentHistoryDetail;
export declare const getTriggerHistory: ({ appId, envId, pagination, releaseId, showCurrentReleaseDeployments, }: TriggerHistoryParamsType) => Promise<Pick<DeploymentHistoryResult, "result">>;
export declare const getModuleConfigured: (moduleName: string) => Promise<ModuleConfigResponse>;
export declare const resourceConflictRedeploy: ({ pipelineId, triggerId, appId, }: ResourceConflictRedeployParamsType) => Promise<void>;
export declare const getResourceConflictDetails: ({ appId, pipelineId, triggerId, signal, }: GetResourceConflictDetailsParamsType) => Promise<ResourceConflictItemType[]>;
