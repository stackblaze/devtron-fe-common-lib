import { SortableTableHeaderCellProps } from './types';
/**
 * Reusable component for the table header cell with support for sorting icons
 *
 * @example Usage
 * ```tsx
 * <SortableTableHeaderCell
 *   isSorted={currentSortedCell === 'cell'}
 *   triggerSorting={() => {}}
 *   sortOrder={SortingOrder.ASC}
 *   title="Header Cell"
 *   disabled={isDisabled}
 * />
 * ```
 *
 * @example Non-sortable cell
 * ```tsx
 * <SortableTableHeaderCell
 *   isSortable={false}
 *   title="Header Cell"
 * />
 * ```
 *
 * * @example Resizable cell (Layout to be controlled externally using useResizableTableConfig)
 * ```tsx
 * <SortableTableHeaderCell
 *   isSortable={false}
 *   isResizable
 *   title="Header Cell"
 * />
 * ```
 */
declare const SortableTableHeaderCell: ({ isSorted, triggerSorting, sortOrder, title, disabled, isSortable, showTippyOnTruncate, id, handleResize, isResizable, infoTooltipText, }: SortableTableHeaderCellProps) => import("react/jsx-runtime").JSX.Element;
export default SortableTableHeaderCell;
