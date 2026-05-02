import { MutableRefObject } from 'react';
import { RegistryType, RuntimeParamsAPIResponseType, RuntimePluginVariables } from '../Shared/types';
import { TeamList, ResponseType, DeploymentNodeType, CDMaterialServiceEnum, CDMaterialServiceQueryParams, CDMaterialResponseType, CDMaterialFilterQuery, EnvironmentListHelmResponse, UserApprovalMetadataType, GlobalVariableOptionType, UserRole, APIOptions, EnvAppsMetaDTO, GetAppsInfoForEnvProps, EnvironmentsGroupedByClustersType, AppsGroupedByProjectsType, ClusterDetailListType } from './Types';
import { ApiResourceType } from '../Pages';
export declare const getTeamListMin: () => Promise<TeamList>;
export declare const SourceTypeMap: {
    BranchFixed: string;
    WEBHOOK: string;
    BranchRegex: string;
};
export declare function getUserRole(appName?: string): Promise<UserRole>;
export declare function setImageTags(request: any, pipelineId: number, artifactId: number): Promise<ResponseType<any>>;
export declare const sanitizeUserApprovalMetadata: (userApprovalMetadata: UserApprovalMetadataType) => UserApprovalMetadataType;
export declare const parseRuntimeParams: (response: RuntimeParamsAPIResponseType) => RuntimePluginVariables[];
export declare const processCDMaterialServiceResponse: (cdMaterialsResult: any, stage: DeploymentNodeType, offset: number, filter: CDMaterialFilterQuery, disableDefaultSelection?: boolean) => CDMaterialResponseType;
export declare const genericCDMaterialsService: (serviceType: CDMaterialServiceEnum, cdMaterialID: number, stage: DeploymentNodeType, signal: AbortSignal, queryParams?: CDMaterialServiceQueryParams) => Promise<CDMaterialResponseType>;
export declare function extractImage(image: string): string;
export declare function createGitCommitUrl(url: string, revision: string): string;
export declare function fetchChartTemplateVersions(): Promise<ResponseType<any>>;
export declare const getDefaultConfig: () => Promise<ResponseType>;
export declare function getEnvironmentListMinPublic(includeAllowedDeploymentTypes?: boolean, options?: APIOptions): Promise<ResponseType<any>>;
export declare function getClusterListMin(): Promise<ResponseType<any>>;
export declare const getResourceGroupListRaw: (clusterId: string) => Promise<ResponseType<ApiResourceType>>;
export declare function getNamespaceListMin(clusterIdsCsv: string, abortControllerRef?: APIOptions['abortControllerRef']): Promise<EnvironmentListHelmResponse>;
export declare function getWebhookEventsForEventId(eventId: string | number): Promise<ResponseType<any>>;
/**
 *
 * @param gitUrl Git URL of the repository
 * @param branchName Branch name
 * @returns URL to the branch in the Git repository
 */
export declare const getGitBranchUrl: (gitUrl: string, branchName: string) => string | null;
export declare const getGlobalVariables: ({ appId, isCD, abortControllerRef, }: {
    appId: number;
    isCD?: boolean;
    abortControllerRef?: MutableRefObject<AbortController>;
}) => Promise<GlobalVariableOptionType[]>;
export declare const getAppsInfoForEnv: ({ envId, appIds }: GetAppsInfoForEnvProps) => Promise<EnvAppsMetaDTO>;
export declare const getAppOptionsGroupedByProjects: () => Promise<AppsGroupedByProjectsType>;
export declare const getEnvironmentOptionsGroupedByClusters: () => Promise<EnvironmentsGroupedByClustersType>;
export declare const getDetailedClusterList: (clusterIds?: number[], signal?: AbortSignal) => Promise<ClusterDetailListType[]>;
export declare const getDockerRegistriesListMin: (signal: AbortSignal) => Promise<ResponseType<{
    id: string;
    registryType: RegistryType;
    isDefault: boolean;
}[]>>;
export declare const getGitProvidersListMin: (signal: AbortSignal) => Promise<ResponseType<{
    id: number;
    name: string;
    url: string;
    authMode: "SSH" | "USERNAME_PASSWORD" | "ANONYMOUS";
}[]>>;
