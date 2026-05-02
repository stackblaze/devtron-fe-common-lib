import { SortingOrder } from '../Constants';
export type SortableTableHeaderCellProps = {
    /**
     * Label for the cell
     */
    title: string;
    /**
     * If true, the tippy is shown on Sortable header if text is truncated
     * @default false
     */
    showTippyOnTruncate?: boolean;
    /**
     * If provided, shown in a tooltip on info-icon-outline beside the label
     */
    infoTooltipText?: string;
} & ({
    /**
     * Unique identifier for the column
     */
    id: string | number;
    /**
     * If true, the cell is resizable
     *
     * @default false
     */
    isResizable: true | boolean;
    /**
     * Resize handler for the table
     */
    handleResize: (id: string | number, deltaChange: number) => void;
} | {
    id?: never;
    isResizable?: false | undefined;
    handleResize?: never;
}) & ({
    /**
     * If false, the cell acts like normal table header cell
     * @default true
     */
    isSortable?: boolean | undefined;
    /**
     * If true, the cell is disabled
     */
    disabled: boolean;
    /**
     * If true, the cell is sorted
     */
    isSorted: boolean;
    /**
     * Callback for handling the sorting of the cell
     */
    triggerSorting: () => void;
    /**
     * Current sort order
     *
     * Note: On click, the sort order should be updated as required
     */
    sortOrder: SortingOrder;
} | {
    isSortable: false;
    disabled?: never;
    isSorted?: never;
    triggerSorting?: never;
    sortOrder?: never;
});
export interface UseResizableTableConfigProps {
    headersConfig: (Pick<SortableTableHeaderCellProps, 'id'> & {
        width: number | string;
        maxWidth?: number;
        minWidth?: number;
    })[];
}
