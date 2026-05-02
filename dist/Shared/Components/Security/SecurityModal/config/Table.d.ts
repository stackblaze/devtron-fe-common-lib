import { OpenDetailViewButtonProps, ScanResultDTO, SecurityModalStateType, TablePropsType } from '../types';
export declare const getTableData: (data: ScanResultDTO, category: SecurityModalStateType["category"], subCategory: SecurityModalStateType["subCategory"], setDetailViewData: OpenDetailViewButtonProps["setDetailViewData"], hidePolicy: boolean) => TablePropsType;
