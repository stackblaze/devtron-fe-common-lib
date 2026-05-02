import { DropdownIndicatorProps, StylesConfig } from 'react-select';
export declare const CommonGroupedDropdownStyles: StylesConfig;
export declare const APP_SELECTOR_STYLES: StylesConfig;
export declare const AppSelectorDropdownIndicator: (props: DropdownIndicatorProps) => import("react/jsx-runtime").JSX.Element;
/**
 *
 * @returns {string}
 * @description Returns the no matching result text for the select component.
 */
export declare const getNoMatchingResultText: () => string;
/**
 * @param inputObj
 * @returns {string}
 * @description Returns the no options message for the select component.
 */
export declare const AppSelectorNoOptionsMessage: (inputObj: {
    inputValue: string;
}) => string;
