import { FiltersTypeEnum, InternalTableProps, RowsType } from './types';
declare const useTableWithKeyboardShortcuts: <RowData extends unknown, FilterVariant extends FiltersTypeEnum, AdditionalProps extends Record<string, any>>({ bulkSelectionConfig, handleToggleBulkSelectionOnRow, bulkSelectionReturnValue, }: Pick<InternalTableProps<RowData, FilterVariant, AdditionalProps>, "bulkSelectionConfig" | "bulkSelectionReturnValue" | "handleToggleBulkSelectionOnRow">, visibleRows: RowsType<RowData>, showPagination: boolean, bulkSelectionButtonRef: React.RefObject<HTMLLabelElement>) => {
    activeRowIndex: number;
    setActiveRowIndex: import('react').Dispatch<import('react').SetStateAction<number>>;
    shortcutContainerProps: {
        onKeyDown: (event: import('react').KeyboardEvent<HTMLElement>) => void;
        onKeyUp: (event: import('react').KeyboardEvent<HTMLElement>) => void;
        onBlur: (event: import('react').FocusEvent<HTMLElement>) => void;
    };
};
export default useTableWithKeyboardShortcuts;
