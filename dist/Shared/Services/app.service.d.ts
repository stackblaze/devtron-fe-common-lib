import { AppConfigProps } from '../../Pages/index';
import { ResponseType } from '../../Common';
import { AppEnvDeploymentConfigDTO, AppEnvDeploymentConfigPayloadType, CIMaterialInfoDTO, GetCITriggerInfoParamsType } from './app.types';
export declare const getCITriggerInfo: (params: GetCITriggerInfoParamsType) => Promise<ResponseType<CIMaterialInfoDTO>>;
/**
 * The only difference between this and getCITriggerInfo is it doesn't have env and trigger related meta info
 */
export declare const getArtifactInfo: (params: Pick<GetCITriggerInfoParamsType, "ciArtifactId">) => Promise<ResponseType<CIMaterialInfoDTO>>;
export declare const getAppEnvDeploymentConfig: ({ params, signal, isTemplateView, appId, }: {
    params: AppEnvDeploymentConfigPayloadType;
    signal?: AbortSignal;
    isTemplateView: AppConfigProps["isTemplateView"];
    appId: string | number | null;
}) => Promise<ResponseType<AppEnvDeploymentConfigDTO>>;
export declare const getCompareSecretsData: (params: AppEnvDeploymentConfigPayloadType[]) => Promise<AppEnvDeploymentConfigDTO[]>;
