import { DetailViewDataType, EmptyStateType, ImageScan, InfoCardPropsType, OpenDetailViewButtonProps, ScanResultDTO, SecurityModalStateType, StatusType, TablePropsType } from '../types';
export declare const getProgressingStateForStatus: (status: StatusType["status"]) => import("react/jsx-runtime").JSX.Element;
export declare const getImageScanTableData: (data: ImageScan, subCategory: SecurityModalStateType["subCategory"], setDetailViewData: OpenDetailViewButtonProps["setDetailViewData"], hidePolicy: boolean) => TablePropsType;
export declare const getImageScanInfoCardData: (data: ImageScan, subCategory: SecurityModalStateType["subCategory"]) => InfoCardPropsType;
export declare const getImageScanEmptyState: (data: ScanResultDTO, subCategory: SecurityModalStateType["subCategory"], detailViewData: DetailViewDataType) => EmptyStateType;
