import { FC, SVGProps } from 'react';
import { TooltipProps } from '../../../Common/Tooltip';
import { IconBaseColorType, IconBaseSizeType } from '../../types';
type IconMap = Record<string, FC<SVGProps<SVGSVGElement>>>;
export interface IconBaseProps {
    /**
     * The name of the icon to render.
     */
    name: keyof IconMap;
    /**
     * A map containing all available icons.
     */
    iconMap: IconMap;
    /**
     * The size of the icon in pixels. If not provided, the default size is `16px`.
     *
     * @default 16
     */
    size?: IconBaseSizeType | null;
    /**
     * Configuration for the tooltip displayed when hovering over the icon.
     */
    tooltipProps?: TooltipProps;
    /**
     * The color of the icon, specified using predefined color tokens.
     * If set to `null`, the icon's default color will be used.
     *
     * @example 'B500', 'N200', 'G50', 'R700'
     */
    color: IconBaseColorType;
    /**
     * A unique identifier for testing purposes, typically used in test automation.
     */
    dataTestId?: string;
    /**
     * Rotates the icon by the specified number of degrees.
     *
     * @example 90, 180, 270
     */
    rotateBy?: number;
    /**
     * Flips the icon in the specified direction
     *
     * @default undefined
     */
    flip?: 'horizontal' | 'vertical';
    /**
     * If true, the icon will expand to fill the available space of its container.
     */
    fillSpace?: boolean;
}
export {};
