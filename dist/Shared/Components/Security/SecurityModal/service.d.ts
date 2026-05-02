import { ResponseType } from '../../../../Common/Types';
import { ScanRecommendationsDTO, ScanResultDTO, ScanResultParamsType } from './types';
export declare const getSecurityScan: ({ appId, envId, installedAppId, artifactId, installedAppVersionHistoryId, }: ScanResultParamsType) => Promise<ResponseType<ScanResultDTO>>;
export declare const getSecurityScanRecommendations: ({ appId, buildId, }: {
    appId: any;
    buildId: any;
}) => Promise<ResponseType<ScanRecommendationsDTO>>;
