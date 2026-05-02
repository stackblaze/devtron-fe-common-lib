import { MenuListProps, StylesConfig, ValueContainerProps } from 'react-select';
import { OptionType } from '../../../Common';
export declare const getCommonSelectStyle: (styleOverrides?: {}) => StylesConfig;
export declare const getCustomOptionSelectionStyle: (styleOverrides?: {}) => (base: any, state: any) => any;
export declare const LoadingIndicator: () => import("react/jsx-runtime").JSX.Element;
export declare const GroupHeading: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare const commonSelectStyles: StylesConfig;
export declare const MenuListWithApplyButton: ({ handleApplyFilter, ...props }: MenuListProps & {
    handleApplyFilter: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const MultiSelectValueContainer: ({ title, ...props }: ValueContainerProps<OptionType, true> & {
    title: string;
}) => import("react/jsx-runtime").JSX.Element;
