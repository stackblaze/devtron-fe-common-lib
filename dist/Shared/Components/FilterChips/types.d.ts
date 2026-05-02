export interface FilterChipProps {
    /**
     * Filter label
     */
    label?: string;
    /**
     * Corresponding value of the filter
     */
    value: unknown;
    /**
     * Callback handler for removing the filter
     */
    handleRemoveFilter: (label: string, valueToRemove: unknown) => void;
    /**
     * If passed, the label will be formatted accordingly
     */
    getFormattedLabel?: (filterKey: string) => string;
    /**
     * If passed, the label will be formatted accordingly
     */
    getFormattedValue?: (filterKey: string, filterValue: unknown) => string;
    showRemoveIcon: boolean;
    /**
     * If true, would hide the label
     * @default false
     */
    shouldHideLabel?: boolean;
}
export type FilterChipsProps<T = Record<string, unknown>> = Pick<FilterChipProps, 'getFormattedLabel' | 'getFormattedValue' | 'shouldHideLabel'> & {
    /**
     * Current filter configuration
     */
    filterConfig: T;
    /**
     * Class name for the container
     */
    className?: string;
} & ({
    /**
     * If false, anything related to removing filters is not shown
     * @default 'true'
     */
    showClearAndRemove: false;
    clearFilters?: never;
    onRemoveFilter?: never;
    clearButtonClassName?: never;
} | {
    showClearAndRemove?: true;
    /**
     * Callback handler for removing the filters
     */
    clearFilters: () => void;
    /**
     * Handler for removing a applied filter
     */
    onRemoveFilter: (filterConfig: T) => void;
    /**
     * Class name for the clear filter button
     */
    clearButtonClassName?: string;
});
