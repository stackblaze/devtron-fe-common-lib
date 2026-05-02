import { ReactElement } from 'react';
import { SupportedKeyboardKeysType } from '../../../Common/Hooks';
import { ButtonComponentType, ButtonProps } from '../../Components';
export declare enum ToastVariantType {
    info = "info",
    success = "success",
    error = "error",
    warn = "warn",
    notAuthorized = "notAuthorized",
    shortcut = "shortcut"
}
export interface ShortcutToastProps {
    variant: ToastVariantType.shortcut;
    /**
     * Text to display along the shortcuts in the toast
     * Example: "Press [S] to switch context"
     */
    text: string;
    /**
     * The shortcuts to be displayed in the toast
     * Note: The shortcuts should be in the format of `['Ctrl', 'A']
     */
    shortcuts: SupportedKeyboardKeysType[];
}
export interface BaseToastProps {
    /**
     * Title for the toast
     * If not provided, defaults to a value based on the selected variant
     */
    title?: string;
    /**
     * Description for the toast
     */
    description: string;
    /**
     * Custom icon for the toast to override the icon based on variant
     */
    icon?: ReactElement;
    /**
     * Variant for the toast
     *
     * @default ToastVariantType.info
     */
    variant?: Exclude<ToastVariantType, ToastVariantType.shortcut>;
    /**
     * Props for the action button to be displayed in the toast
     *
     * Note: Size, variant and style are hard-coded and cannot be overridden
     */
    buttonProps?: ButtonProps<ButtonComponentType>;
    /**
     * Custom progress bar color
     */
    progressBarBg?: string;
}
export type ToastProps = (BaseToastProps & Partial<Record<Exclude<keyof ShortcutToastProps, 'variant'>, never>>) | (ShortcutToastProps & Partial<Record<Exclude<keyof BaseToastProps, 'variant'>, never>>);
export interface ShortcutToastContentProps {
    text: string;
    shortcuts: SupportedKeyboardKeysType[];
}
