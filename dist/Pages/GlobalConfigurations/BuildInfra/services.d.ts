import { BuildInfraPayloadType } from '../../index';
import { BuildInfraProfileResponseType, GetBuildInfraProfileType, UpsertBuildInfraProfileServiceParamsType } from './types';
export declare const getBuildInfraProfileByName: ({ name, fromCreateView, canConfigureUseK8sDriver, }: GetBuildInfraProfileType) => Promise<BuildInfraProfileResponseType>;
export declare const createBuildInfraProfileService: (payload: BuildInfraPayloadType) => Promise<import('../../../Common').ResponseType<Promise<import('../../../Common').ResponseType<unknown>>>>;
export declare const upsertBuildInfraProfile: ({ name, profileInput, canConfigureUseK8sDriver, }: UpsertBuildInfraProfileServiceParamsType) => Promise<import('../../../Common').ResponseType<Promise<import('../../../Common').ResponseType<unknown>>>>;
