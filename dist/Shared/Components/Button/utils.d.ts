import { ButtonProps } from './types';
export declare const getButtonIconClassName: ({ size, icon }: Pick<ButtonProps, "size" | "icon">) => string;
export declare const getButtonLoaderSize: ({ size, icon }: Pick<ButtonProps, "size" | "icon">) => number;
export declare const getButtonDerivedClass: ({ size, variant, style, isLoading, icon, isAutoTriggerActive, fontWeight, }: Required<Pick<ButtonProps, "variant" | "size" | "style" | "isLoading" | "icon" | "fontWeight"> & {
    isAutoTriggerActive: boolean;
}>) => string;
