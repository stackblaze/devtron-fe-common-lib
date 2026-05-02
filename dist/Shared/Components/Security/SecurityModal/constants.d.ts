import { ScanCategoriesWithLicense } from '../types';
import { EmptyStateType, SecurityModalStateType, SeveritiesDTO, SortOrderEnum } from './types';
export declare const DEFAULT_SECURITY_MODAL_IMAGE_STATE: {
    category: "imageScan";
    subCategory: "vulnerability";
    detailViewData: any;
};
export declare const getDefaultSecurityModalState: (categoriesConfig: Record<ScanCategoriesWithLicense, boolean>) => SecurityModalStateType;
export declare const CATEGORY_LABELS: {
    readonly IMAGE_SCAN: "Image Scan";
    readonly CODE_SCAN: "Code Scan";
    readonly KUBERNETES_MANIFEST: "Kubernetes Manifest";
};
export declare const SUB_CATEGORY_LABELS: {
    readonly VULNERABILITIES: "Vulnerability";
    readonly LICENSE: "License Risks";
    readonly MISCONFIGURATIONS: "Misconfigurations";
    readonly EXPOSED_SECRETS: "Exposed Secrets";
};
export declare const SEVERITIES_LABEL_COLOR_MAP: {
    readonly critical: {
        readonly label: "Critical";
        readonly color: "var(--R700)";
    };
    readonly high: {
        readonly label: "High";
        readonly color: "var(--R500)";
    };
    readonly medium: {
        readonly label: "Medium";
        readonly color: "var(--O500)";
    };
    readonly low: {
        readonly label: "Low";
        readonly color: "var(--Y500)";
    };
    readonly unknown: {
        readonly label: "Unknown";
        readonly color: "var(--N300)";
    };
    readonly fail: {
        readonly label: "Failures";
        readonly color: "var(--R500)";
    };
    readonly success: {
        readonly label: "Successes";
        readonly color: "var(--G500)";
    };
    readonly exceptions: {
        readonly label: "Exceptions";
        readonly color: "var(--N300)";
    };
};
export declare const ORDERED_SEVERITY_KEYS: readonly [SeveritiesDTO.CRITICAL, SeveritiesDTO.HIGH, SeveritiesDTO.MEDIUM, SeveritiesDTO.LOW, SeveritiesDTO.UNKNOWN, SeveritiesDTO.FAILURES, SeveritiesDTO.EXCEPTIONS, SeveritiesDTO.SUCCESSES];
export declare const SEVERITY_DEFAULT_SORT_ORDER = SortOrderEnum['DESC'];
export declare const SCAN_FAILED_EMPTY_STATE: EmptyStateType;
export declare const SCAN_IN_PROGRESS_EMPTY_STATE: EmptyStateType;
export declare const TRIVY_ICON_URL = "https://cdn.devtron.ai/images/ic-trivy.webp";
