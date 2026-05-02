import { IconBaseColorType } from '../../types';
import { ROUNDED_SWITCH_TRACK_HOVER_COLOR_MAP } from './constants';
import { DTSwitchProps } from './types';
export declare const getSwitchContainerClass: ({ shape, size }: Required<Pick<DTSwitchProps, "shape" | "size">>) => string;
export declare const getSwitchTrackColor: ({ shape, variant, isChecked, isLoading, }: Required<Pick<DTSwitchProps, "shape" | "variant" | "isChecked" | "isLoading">>) => string;
export declare const getSwitchTrackHoverColor: ({ shape, variant, isChecked, isLoading, }: Required<Pick<DTSwitchProps, "shape" | "variant" | "isChecked" | "isLoading">>) => (typeof ROUNDED_SWITCH_TRACK_HOVER_COLOR_MAP)[DTSwitchProps["variant"]] | "transparent";
export declare const getSwitchThumbClass: ({ shape, size, showIndeterminateIcon, }: Pick<DTSwitchProps, "shape" | "size"> & {
    showIndeterminateIcon: boolean;
}) => string;
export declare const getSwitchIconColor: ({ iconColor, isChecked, variant, }: Pick<DTSwitchProps, "iconColor" | "isChecked" | "variant">) => IconBaseColorType;
export declare const getThumbPosition: ({ isChecked, size, shape, indeterminate, isLoading, }: Required<Pick<DTSwitchProps, "isChecked" | "size" | "shape" | "indeterminate" | "isLoading">>) => number;
export declare const getThumbPadding: ({ shape, isLoading }: Pick<DTSwitchProps, "shape" | "isLoading">) => string;
