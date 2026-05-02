import { default as React } from 'react';
export declare const Option: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare const SingleSelectOption: (props: any) => import("react/jsx-runtime").JSX.Element;
/**
 *  Multi value container
 */
export declare const MultiValueContainer: (props: any) => import("react/jsx-runtime").JSX.Element;
/**
 *
 * Multi value container with count
 */
export declare const MultiValueContainerWithCount: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare const ClearIndicator: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare const MultiValueRemove: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare const MultiValueChipContainer: ({ validator, isAllSelected, ...props }: {
    [x: string]: any;
    validator: any;
    isAllSelected?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const multiSelectStyles: {
    control: (base: any, state: any) => any;
    menu: (base: any, state: any) => any;
    option: (base: any, state: any) => any;
    container: (base: any, state: any) => any;
    valueContainer: (base: any, state: any) => any;
    singleValue: (base: any) => any;
    input: (base: any) => any;
};
export interface CustomSelect {
    sortSelected?: boolean;
    options: any[];
    onChange: (...args: any[]) => void;
    value?: any;
    name?: string;
    placeholder?: string;
    className?: string;
    classNamePrefix?: string;
    menuPortalTarget?: any;
    components?: object;
    styles?: object;
    isMulti?: boolean;
    isDisabled?: boolean;
    closeMenuOnSelect?: boolean;
    hideSelectedOptions?: boolean;
    formatOptionLabel?: (...args: any[]) => any;
}
export declare const CustomSelect: React.FC<CustomSelect>;
