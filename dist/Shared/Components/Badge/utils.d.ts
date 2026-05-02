import { IconBaseColorType, IconBaseSizeType } from '../../types';
import { BadgeProps } from './types';
export declare const getClassNameAccToVariant: (variant: BadgeProps["variant"]) => {
    styles: string;
    iconColor: IconBaseColorType;
};
export declare const getClassNameAccToSize: (size: BadgeProps["size"]) => "fs-11 lh-16 px-4 py-1" | "fs-12 lh-16 px-6 py-2" | "fs-13 lh-20 px-6 py-2";
export declare const COMPONENT_SIZE_TO_ICON_SIZE_MAP: Record<BadgeProps['size'], IconBaseSizeType>;
