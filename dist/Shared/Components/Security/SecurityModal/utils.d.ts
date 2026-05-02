import { SEVERITIES_LABEL_COLOR_MAP } from './constants';
import { GetResourceScanDetailsResponseType, ImageScanVulnerabilityType, ImageVulnerabilityType, ScanResultDTO, SeveritiesDTO, VulnerabilityCountType } from './types';
export declare const mapSeveritiesToSegmentedBarChartEntities: (severities: Partial<Record<keyof typeof SEVERITIES_LABEL_COLOR_MAP, number>>) => {
    color: "var(--Y500)" | "var(--R700)" | "var(--R500)" | "var(--G500)" | "var(--N300)" | "var(--O500)";
    label: "Unknown" | "Critical" | "High" | "Medium" | "Low" | "Failures" | "Successes" | "Exceptions";
    value: number;
}[];
export declare const stringifySeverities: (severities: Partial<Record<keyof typeof SEVERITIES_LABEL_COLOR_MAP, number>>) => string;
export declare const getSeverityWeight: (severity: SeveritiesDTO) => number;
export declare const compareSeverity: (a: SeveritiesDTO, b: SeveritiesDTO) => number;
export declare const getSecurityScanSeveritiesCount: (data: ScanResultDTO) => {
    critical: number;
    high: number;
    medium: number;
    low: number;
    unknown: number;
};
export declare const compareSeverities: (a: Record<SeveritiesDTO, number>, b: Record<SeveritiesDTO, number>) => number;
export declare const getScanCompletedEmptyState: (scanToolName: string, scanToolUrl: string) => {
    SvgImage: import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    title: string;
    children: import("react/jsx-runtime").JSX.Element;
};
export declare const compareStringAndObject: (a: string | object, b: string | object) => number;
export declare const parseGetResourceScanDetailsResponse: (data: GetResourceScanDetailsResponseType) => ScanResultDTO;
export declare const getTotalVulnerabilityCount: (scannedResult: ImageVulnerabilityType[]) => VulnerabilityCountType;
export declare const groupByTarget: (list: ImageScanVulnerabilityType[]) => {
    source: string;
    list: ImageScanVulnerabilityType[];
    summary: {
        severities: Partial<Record<SeveritiesDTO, number>>;
    };
}[];
