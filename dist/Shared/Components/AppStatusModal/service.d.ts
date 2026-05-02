import { AppDetails, DeploymentStatusDetailsBreakdownDataType } from '../../types';
import { GetAppDetailsParamsType, GetDeploymentStatusWithTimelineParamsType } from './types';
export declare const getAppDetails: ({ appId, envId, abortControllerRef, }: GetAppDetailsParamsType) => Promise<AppDetails>;
export declare const getDeploymentStatusWithTimeline: ({ abortControllerRef, appId, envId, showTimeline, virtualEnvironmentConfig, isHelmApp, deploymentAppType, }: GetDeploymentStatusWithTimelineParamsType) => Promise<DeploymentStatusDetailsBreakdownDataType>;
