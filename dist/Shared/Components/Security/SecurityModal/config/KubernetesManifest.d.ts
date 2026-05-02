import { DetailViewDataType, EmptyStateType, InfoCardPropsType, KubernetesManifest, OpenDetailViewButtonProps, ScanResultDTO, SecurityModalStateType, TablePropsType } from '../types';
export declare const getKubernetesManifestTableData: (data: KubernetesManifest, subCategory: SecurityModalStateType["subCategory"], setDetailViewData: OpenDetailViewButtonProps["setDetailViewData"]) => TablePropsType;
export declare const getKubernetesManifestInfoCardData: (data: KubernetesManifest, subCategory: SecurityModalStateType["subCategory"]) => InfoCardPropsType;
export declare const getKubernetesManifestEmptyState: (data: ScanResultDTO, subCategory: SecurityModalStateType["subCategory"], detailViewData: DetailViewDataType) => EmptyStateType;
