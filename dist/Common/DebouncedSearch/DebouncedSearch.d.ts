import { DebouncedSearchProps } from './Types';
/**
 * @deprecated Use `SearchBar` component instead.
 *
 * @param onSearch - Callback function to be called on search
 * @param Icon - (Optional) Icon to be shown before the input
 * @param iconClass - (Optional) Class for the icon
 * @param children - (Optional) In case we want to add another button or any other element
 * @param placeholder - (Optional) Placeholder for the input
 * @param containerClass - (Optional) Class for the container
 * @param inputClass - (Optional) Class for the input field
 * @param debounceTimeout - (Optional) Timeout for the debounce with default value of 500ms
 * @param clearSearch - (Optional) To clear the search text
 * @param showClearIcon - (Optional) To show the clear icon default value is true
 */
export default function DebouncedSearch({ onSearch, Icon, children, placeholder, containerClass, iconClass, inputClass, debounceTimeout, clearSearch, showClearIcon, autoFocus, }: DebouncedSearchProps): import("react/jsx-runtime").JSX.Element;
