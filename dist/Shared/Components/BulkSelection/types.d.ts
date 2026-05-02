import { Ref } from 'react';
import { CHECKBOX_VALUE } from '../../../Common';
export declare enum BulkSelectionEvents {
    CLEAR_ALL_SELECTIONS = "CLEAR_ALL_SELECTIONS",
    CLEAR_IDENTIFIERS = "CLEAR_IDENTIFIERS",
    SELECT_ALL_ACROSS_PAGES = "SELECT_ALL_ACROSS_PAGES",
    SELECT_ALL_ON_PAGE = "SELECT_ALL_ON_PAGE",
    SELECT_IDENTIFIER = "SELECT_IDENTIFIER",
    CLEAR_IDENTIFIERS_AFTER_ACROSS_SELECTION = "CLEAR_IDENTIFIERS_AFTER_ACROSS_SELECTION",
    CLEAR_SELECTIONS_AND_SELECT_ALL_ACROSS_PAGES = "CLEAR_SELECTIONS_AND_SELECT_ALL_ACROSS_PAGES"
}
export interface HandleBulkSelectionType<T> {
    action: BulkSelectionEvents;
    data?: {
        identifierIds?: (number | string)[];
        identifierObject?: T;
    };
}
export interface GetBulkSelectionCheckboxValuesType {
    isChecked: boolean;
    checkboxValue: CHECKBOX_VALUE;
}
export interface UseBulkSelectionReturnType<T> extends GetBulkSelectionCheckboxValuesType {
    selectedIdentifiers: T;
    handleBulkSelection: ({ action, data }: HandleBulkSelectionType<T>) => void;
    isBulkSelectionApplied: boolean;
    getSelectedIdentifiersCount: () => number;
    setIdentifiers: React.Dispatch<React.SetStateAction<T>>;
}
export interface BulkSelectionProps {
    showPagination: boolean;
    /**
     * @default true
     */
    showChevronDownIcon?: boolean;
    disabled?: boolean;
    /**
     * Will act as checkbox instead of opening up popup if list is not paginated
     */
    selectAllIfNotPaginated?: boolean;
    ref?: Ref<HTMLLabelElement>;
}
export declare enum SelectAllDialogStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED"
}
export type BulkSelectionIdentifiersType<T> = Record<string | number, T>;
export interface UseBulkSelectionProps<T> {
    /**
     * Act as buffer between select all across pages and select all on page state
     */
    getSelectAllDialogStatus: () => SelectAllDialogStatus;
    /**
     * Response from API, assuming structure to be array of objects with key and values
     * This will the given ids on current page.
     *
     * NOTE!: Please wrap this value with a useMemo since it goes into useEffect dependency
     */
    identifiers?: T;
    children?: React.ReactNode;
}
