import { ImageScanLicenseListType, ImageScanVulnerabilityListType, StatusType } from './SecurityModal/types';
import { ScanResultDTO, SeveritiesDTO } from './SecurityModal';
import { CategoriesConfig, SecurityConfigType } from './types';
export declare const getCVEUrlFromCVEName: (cveName: string) => string;
export declare const getTotalSeverities: (severityCount: Partial<Record<SeveritiesDTO, number>>) => number;
export declare const getSecurityConfig: ({ imageScan, codeScan, kubernetesManifest, }: CategoriesConfig) => SecurityConfigType;
export declare const getCompiledSecurityThreats: (scanResult: ScanResultDTO) => Partial<Record<SeveritiesDTO, number>>;
export declare const getStatusForScanList: (scanList: ImageScanVulnerabilityListType[] | ImageScanLicenseListType[]) => StatusType["status"];
export declare const getSecurityScanStatus: (scanResult: ScanResultDTO) => StatusType["status"];
