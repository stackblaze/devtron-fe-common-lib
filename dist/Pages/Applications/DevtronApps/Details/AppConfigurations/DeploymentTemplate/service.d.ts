import { ResponseType } from '../../../../../../Common/Types';
import { GetDeploymentManifestProps, GetResolvedDeploymentTemplateProps, GetResolvedDeploymentTemplateReturnType, ResolvedDeploymentTemplateDTO } from './types';
export declare const getDeploymentManifest: (params: GetDeploymentManifestProps, abortSignal?: AbortSignal) => Promise<ResponseType<ResolvedDeploymentTemplateDTO>>;
export declare const getResolvedDeploymentTemplate: (params: GetResolvedDeploymentTemplateProps, signal?: AbortSignal) => Promise<GetResolvedDeploymentTemplateReturnType>;
