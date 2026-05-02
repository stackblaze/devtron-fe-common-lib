import { MainContext } from '../Providers';
import { ClusterDetailDTO, getUrlWithSearchParams } from '../../Common';
import { PolicyKindType, ResourceKindType, ResourceVersionType } from '../types';
export interface BaseAppMetaData {
    appId: number;
    appName: string;
}
export interface ClusterType {
    id: number;
    name: string;
    /**
     * If true, denotes virtual cluster
     */
    isVirtual: boolean;
    /**
     * If true, denotes prod labelled cluster
     */
    isProd: boolean;
}
/**
 * T => Type of query params
 * K => Type of kind
 * P => Type of version
 */
interface BaseGetApiUrlProps<T, K extends ResourceKindType | PolicyKindType, P extends ResourceVersionType> {
    baseUrl: string;
    kind: K;
    version: P;
    suffix?: string;
    queryParams?: T extends Parameters<typeof getUrlWithSearchParams>[1] ? T : never;
}
export interface GetResourceApiUrlProps<T> extends BaseGetApiUrlProps<T, ResourceKindType, ResourceVersionType> {
}
export interface GetPolicyApiUrlProps<T> extends Omit<BaseGetApiUrlProps<T, PolicyKindType, ResourceVersionType>, 'baseUrl'> {
}
export interface EnvironmentDataValuesDTO extends Pick<MainContext, 'featureGitOpsFlags' | 'canFetchHelmAppStatus'> {
    isAirGapEnvironment: boolean;
    isManifestScanningEnabled: boolean;
    canOnlyViewPermittedEnvOrgLevel: boolean;
    devtronManagedLicensingEnabled: boolean;
    isResourceRecommendationEnabled?: boolean;
    featureAskDevtronExpert: boolean;
    forceDockerfileScan: boolean;
}
export interface ClusterMinDTO {
    id: number;
    cluster_name: string;
    isVirtualCluster: boolean;
    isProd: boolean;
}
export type AllClusterListMinItemDTO = Pick<ClusterDetailDTO, 'id' | 'cluster_name' | 'isVirtualCluster' | 'isProd'> & {
    costModuleConfig: Pick<ClusterDetailDTO['costModuleConfig'], 'enabled' | 'installationStatus'>;
};
export {};
