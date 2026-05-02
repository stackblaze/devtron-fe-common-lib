import { Column, ConfigurableColumnsType, FiltersTypeEnum, GetFilteringPromiseProps, RowsType, TableProps, UseFiltersReturnType } from './types';
export declare const searchAndSortRows: <RowData extends unknown, FilterVariant extends FiltersTypeEnum, AdditionalProps extends Record<string, any>>(rows: TableProps<RowData, FilterVariant, AdditionalProps>["rows"], filter: TableProps<RowData, FilterVariant, AdditionalProps>["filter"], filterData: UseFiltersReturnType, additionalProps: AdditionalProps, comparator?: Column<RowData, FilterVariant, AdditionalProps>["comparator"]) => Awaited<ReturnType<TableProps<RowData>["getRows"]>>;
export declare const getVisibleColumnsFromLocalStorage: <RowData extends unknown, FilterVariant extends FiltersTypeEnum, AdditionalProps extends Record<string, any>>({ allColumns, id, }: Pick<ConfigurableColumnsType<RowData, FilterVariant, AdditionalProps>, "allColumns"> & Pick<TableProps<RowData, FilterVariant, AdditionalProps>, "id">) => Column<RowData, FilterVariant, AdditionalProps>[];
export declare const setVisibleColumnsToLocalStorage: <RowData extends unknown, FilterVariant extends FiltersTypeEnum, AdditionalProps extends Record<string, any>>({ id, visibleColumns, }: Pick<ConfigurableColumnsType<RowData, FilterVariant, AdditionalProps>, "visibleColumns"> & Pick<TableProps<RowData, FilterVariant, AdditionalProps>, "id">) => void;
export declare const getVisibleColumns: <RowData extends unknown, FilterVariant extends FiltersTypeEnum, AdditionalProps extends Record<string, any>>({ areColumnsConfigurable, columns, id, }: Pick<TableProps<RowData, FilterVariant, AdditionalProps>, "areColumnsConfigurable" | "columns" | "id">) => Column<RowData, FilterVariant, AdditionalProps>[];
export declare const getFilteringPromise: <RowData extends unknown>({ searchSortTimeoutRef, callback, }: GetFilteringPromiseProps<RowData>) => Promise<RowsType<RowData>>;
export declare const getStickyColumnConfig: (gridTemplateColumns: string, columnIndex: number) => {
    className: string;
    left: string;
};
export declare const scrollToShowActiveElementIfNeeded: (activeElement: HTMLDivElement, parent: HTMLDivElement, topMargin: number) => void;
