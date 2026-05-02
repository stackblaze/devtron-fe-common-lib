import { FilterChipsProps } from './types';
/**
 * Component for rendering the applied filter chips
 */
declare const FilterChips: <T = Record<string, unknown>>({ filterConfig, clearFilters, onRemoveFilter, getFormattedLabel, getFormattedValue, className, clearButtonClassName, showClearAndRemove, shouldHideLabel, }: FilterChipsProps<T>) => import("react/jsx-runtime").JSX.Element;
export default FilterChips;
