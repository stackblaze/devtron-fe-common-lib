import { CodeScan, DetailViewDataType, EmptyStateType, InfoCardPropsType, OpenDetailViewButtonProps, ScanResultDTO, SecurityModalStateType, StatusType, TablePropsType } from '../types';
export declare const getCodeScanVulnerabilities: (data: CodeScan["vulnerability"], hidePolicy: boolean) => TablePropsType;
export declare const getCodeScanLicense: (data: CodeScan["license"]) => TablePropsType;
export declare const getCodeScanMisconfigurations: (data: CodeScan["misConfigurations"], setDetailViewData: OpenDetailViewButtonProps["setDetailViewData"], lastScanTimeString: string, status: StatusType["status"], scanToolName: StatusType["scanToolName"], scanToolUrl: StatusType["scanToolUrl"]) => TablePropsType;
export declare const getCodeScanExposedSecrets: (data: CodeScan["exposedSecrets"], setDetailViewData: OpenDetailViewButtonProps["setDetailViewData"], lastScanTimeString: string, status: StatusType["status"], scanToolName: StatusType["scanToolName"], scanToolUrl: StatusType["scanToolUrl"]) => TablePropsType;
export declare const getCodeScanTableData: (data: CodeScan, subCategory: SecurityModalStateType["subCategory"], setDetailViewData: OpenDetailViewButtonProps["setDetailViewData"], hidePolicy: boolean) => TablePropsType;
export declare const getCodeScanInfoCardData: (data: CodeScan, subCategory: SecurityModalStateType["subCategory"]) => InfoCardPropsType;
export declare const getCodeScanEmptyState: (data: ScanResultDTO, subCategory: SecurityModalStateType["subCategory"], detailViewData: DetailViewDataType) => EmptyStateType;
