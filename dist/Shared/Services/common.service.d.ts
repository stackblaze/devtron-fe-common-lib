import { AppConfigProps } from '../../Pages/index';
import { AllClusterListMinItemDTO, ClusterType } from '..';
import { EnvironmentDataValuesDTO, GetPolicyApiUrlProps, GetResourceApiUrlProps } from './types';
export declare const getResourceApiUrl: <T>({ baseUrl, kind, version, suffix, queryParams }: GetResourceApiUrlProps<T>) => string;
export declare const getPolicyApiUrl: <T>({ kind, version, queryParams, suffix }: GetPolicyApiUrlProps<T>) => string;
export declare const saveCDPipeline: (request: any, { isTemplateView }: Required<Pick<AppConfigProps, "isTemplateView">>) => Promise<import('../../Common').ResponseType<any>>;
export declare const getEnvironmentData: () => Promise<import('../../Common').ResponseType<EnvironmentDataValuesDTO>>;
export declare const getClusterOptions: (signal?: AbortSignal) => Promise<ClusterType[]>;
export declare const getAllClusterListMin: (signal: AbortSignal) => Promise<import('../../Common').ResponseType<AllClusterListMinItemDTO[]>>;
