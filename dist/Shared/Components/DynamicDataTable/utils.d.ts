import { DynamicDataTableHeaderType, DynamicDataTableProps, DynamicDataTableRowDataType } from './types';
export declare const getActionButtonPosition: <K extends string, CustomStateType = Record<string, unknown>>({ headers, actionButtonConfig, }: Pick<DynamicDataTableProps<K, CustomStateType>, "headers" | "actionButtonConfig">) => number;
export declare const getHeaderGridTemplateColumn: <K extends string, CustomStateType = Record<string, unknown>>(headers: DynamicDataTableHeaderType<K>[], actionButtonConfig: DynamicDataTableProps<K, CustomStateType>["actionButtonConfig"], noDeleteBtn: boolean) => string;
export declare const getRowGridTemplateColumn: <K extends string, CustomStateType = Record<string, unknown>>(headers: DynamicDataTableHeaderType<K>[], actionButtonConfig: DynamicDataTableProps<K, CustomStateType>["actionButtonConfig"], noDeleteBtn: boolean) => string;
export declare const rowTypeHasInputField: (type: DynamicDataTableRowDataType) => boolean;
