import { SearchBarProps } from './types';
/**
 * Generic search input component with support for enter based and debounced search
 * Note: The component is uncontrolled
 *
 * @example Usage with default debounced search
 * ```tsx
 * <SearchBar handleSearchChange={triggerSearchApi} shouldDebounce />
 * ```
 *
 * @example Initial search text
 * ```tsx
 * <SearchBar initialSearchText="Keyword" />
 * ```
 *
 * @example Custom width
 * ```tsx
 * <SearchBar containerClassName="w-300" />
 * ```
 *
 * @example Trigger search on enter key press
 * ```tsx
 * <SearchBar handleEnter={triggerSearchApi} />
 * ```
 *
 * @example Custom timeout for debounced search
 * ```tsx
 * <SearchBar handleSearchChange={triggerSearchApi} shouldDebounce debounceTimeout={500} />
 * ```
 *
 * @example Placeholder for the search
 * ```tsx
 * <SearchBar inputProps={{ placeholder: 'Enter search text' }} />
 * ```
 */
declare const SearchBar: ({ initialSearchText, handleSearchChange, handleEnter, inputProps, containerClassName, shouldDebounce, debounceTimeout, dataTestId, noBackgroundAndBorder, size, keyboardShortcut, variant, isLoading, }: SearchBarProps) => import("react/jsx-runtime").JSX.Element;
export default SearchBar;
