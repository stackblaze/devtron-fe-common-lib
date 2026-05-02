import { InfoBlockVariant } from '../../constants';
import { ButtonProps } from '../Button';
import { InfoBlockProps } from './types';
export declare const VARIANT_TO_ICON_MAP: Record<InfoBlockVariant, InfoBlockProps['customIcon']>;
export declare const CONTAINER_SIZE_TO_CLASS_MAP: Record<InfoBlockProps['size'], string>;
export declare const SIZE_TO_ICON_CLASS_MAP: Record<InfoBlockProps['size'], string>;
export declare const CONTAINER_SIZE_TO_TEXT_BUTTON_SIZE: Record<InfoBlockProps['size'], ButtonProps['size']>;
export declare const CONTAINER_SIZE_TO_ICON_BUTTON_SIZE: Record<InfoBlockProps['size'], ButtonProps['size']>;
