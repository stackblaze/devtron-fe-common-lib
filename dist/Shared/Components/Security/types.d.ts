import { CATEGORIES, ScanResultDTO, SUB_CATEGORIES } from './SecurityModal/types';
export type ScanCategories = (typeof CATEGORIES)[keyof typeof CATEGORIES];
export type ScanSubCategories = (typeof SUB_CATEGORIES)[keyof typeof SUB_CATEGORIES];
export type ScanCategoriesWithLicense = ScanCategories | 'imageScanLicenseRisks';
export type CategoriesConfig = {
    imageScan: boolean;
    codeScan: boolean;
    kubernetesManifest: boolean;
};
interface SecurityConfigCategoryType {
    label: string;
    subCategories: ScanSubCategories[];
}
export interface SecurityConfigType {
    imageScan?: SecurityConfigCategoryType;
    codeScan?: SecurityConfigCategoryType;
    kubernetesManifest?: SecurityConfigCategoryType;
}
export interface GetSidebarDataParamsType extends Record<ScanCategoriesWithLicense, boolean> {
    selectedId: string;
    scanResult: ScanResultDTO;
}
export declare enum VulnerabilityDiscoveryAgeOptions {
    LESS_THAN_30_DAYS = "lt_30d",
    BETWEEN_30_AND_60_DAYS = "30_60d",
    BETWEEN_60_AND_90_DAYS = "60_90d",
    GREATER_THAN_90_DAYS = "gt_90d"
}
export declare enum FixAvailabilityOptions {
    FIX_AVAILABLE = "fixAvailable",
    FIX_NOT_AVAILABLE = "fixNotAvailable"
}
export {};
