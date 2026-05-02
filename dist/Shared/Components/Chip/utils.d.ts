import { ComponentSizeType } from '../../constants';
import { ChipProps } from './types';
export declare const getIconSize: (size: ChipProps["size"]) => 14 | 16;
export declare const getPadding: (size: ChipProps["size"]) => "px-4 py-2" | "px-6 py-2";
export declare const getFontSize: (size: ChipProps["size"]) => "fs-12 lh-16" | "fs-12 lh-20";
export declare const getSupportedChipSizes: (size: ComponentSizeType) => ComponentSizeType.xxs | ComponentSizeType.xs;
