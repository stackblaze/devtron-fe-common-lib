import { SupportedKeyboardKeysType } from '../Hooks/UseRegisterShortcut/types';
import { ComponentSizeType } from '../../Shared/constants';
export interface SearchBarProps {
    /**
     * Initial search text
     *
     * @default ''
     */
    initialSearchText?: string;
    /**
     * Search handler for the search input
     */
    handleSearchChange?: (searchText: string) => void;
    /**
     * Enter event handler for the search input
     */
    handleEnter?: (searchText: string) => void;
    /**
     * Input props for the search input
     */
    inputProps?: React.InputHTMLAttributes<HTMLInputElement> & Partial<Record<'ref', React.MutableRefObject<HTMLInputElement>>>;
    /**
     * Class name for the container; can be used for handling width
     */
    containerClassName?: string;
    /**
     * If true, the change handler would be triggered with debounce
     *
     * @default false
     */
    shouldDebounce?: boolean;
    /**
     * Timeout for the debounce handler to be triggered
     */
    debounceTimeout?: number;
    /**
     * Data test id for the search input
     */
    dataTestId?: string;
    /**
     * Hide the background and border of the search
     */
    noBackgroundAndBorder?: boolean;
    /**
     * Height of the searchbar
     *
     * @default 'ComponentSizeType.medium'
     */
    size?: ComponentSizeType.medium | ComponentSizeType.large;
    /**
     * Renders the keyboard shortcut key that opens the select picker \
     * Shortcut key needs to be defined first in order to use it.
     * @note This is displayed in place of the dropdown indicator
     */
    keyboardShortcut?: SupportedKeyboardKeysType;
    /**
     * @default 'default'
     */
    variant?: 'default' | 'sidenav';
    /**
     * If true, would convert the magnifying glass icon to a loading spinner
     */
    isLoading?: boolean;
}
