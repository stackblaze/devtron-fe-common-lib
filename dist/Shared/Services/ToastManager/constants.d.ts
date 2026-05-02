import { ToastContainerProps, ToastOptions } from 'react-toastify';
import { BaseToastProps, ToastProps } from './types';
export declare const TOAST_BASE_CONFIG: ToastContainerProps;
export declare const TOAST_VARIANT_TO_CONFIG_MAP: Record<BaseToastProps['variant'], Required<Pick<ToastProps, 'icon' | 'title' | 'progressBarBg'>> & Pick<ToastOptions, 'type'>>;
