import { UseStateFiltersReturnType } from '../../../Common/Hooks';
import { KeyValueTableData, KeyValueTableDataType, KeyValueTableInternalProps, KeyValueTableProps, KeyValueValidationSchemaProps } from './KeyValueTable.types';
export declare const getModifiedDataForOnChange: (rows: KeyValueTableInternalProps["rows"]) => KeyValueTableData[];
export declare const getEmptyRow: (placeholder: KeyValueTableProps["placeholder"]) => KeyValueTableInternalProps["rows"][number];
export declare const getKeyValueTableRows: ({ rows: initialRows, placeholder, maskValue, }: Required<Pick<KeyValueTableProps, "rows" | "placeholder" | "maskValue">>) => KeyValueTableInternalProps["rows"];
export declare const getKeyValueTableSortedRows: ({ rows, sortBy, sortOrder, }: Required<Pick<UseStateFiltersReturnType<KeyValueTableDataType>, "sortBy" | "sortOrder">> & Pick<KeyValueTableInternalProps, "rows">) => import('../DynamicDataTable').DynamicDataTableRowType<KeyValueTableDataType, never>[];
export declare const getKeyValueHeaders: ({ headerLabel, isSortable, }: Pick<KeyValueTableProps, "headerLabel" | "isSortable">) => KeyValueTableInternalProps["headers"];
export declare const getKeyValueTableCellError: ({ validateDuplicateKeys, validateEmptyKeys, validationSchema: parentValidationSchema, rows, }: Pick<KeyValueValidationSchemaProps, "validateDuplicateKeys" | "validateEmptyKeys" | "validationSchema" | "rows"> & {
    skipValidationIfValueIsEmpty?: boolean;
}) => {
    isValid: boolean;
    updatedCellError: {};
};
