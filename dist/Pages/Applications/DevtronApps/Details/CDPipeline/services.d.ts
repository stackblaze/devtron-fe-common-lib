import { MutableRefObject } from 'react';
import { UploadFileDTO, UploadFileProps } from '../../../../../Shared/types';
import { TriggerCDNodeServiceProps } from './types';
export declare const uploadCDPipelineFile: ({ file, appId, envId, allowedExtensions, maxUploadSize, abortControllerRef, }: UploadFileProps & {
    appId: number;
    envId: number;
    abortControllerRef?: MutableRefObject<AbortController>;
}) => Promise<UploadFileDTO>;
export declare const triggerCDNode: ({ pipelineId, ciArtifactId, appId, stageType, deploymentWithConfig, wfrId, runtimeParamsPayload, abortControllerRef, skipIfHibernated, isRollbackTrigger, strategy, }: TriggerCDNodeServiceProps) => Promise<import('../../../../../Common/Types').ResponseType<any>>;
