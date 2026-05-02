import { CSSProperties } from 'react';
import { SelectPickerProps } from './type';
export declare const SELECT_PICKER_FONT_SIZE_MAP: Record<SelectPickerProps['size'], CSSProperties['fontSize']>;
export declare const SELECT_PICKER_ICON_SIZE_MAP: Record<SelectPickerProps['size'], Pick<CSSProperties, 'width' | 'height'>>;
export declare const SELECT_PICKER_CONTROL_SIZE_MAP: Record<SelectPickerProps['size'], CSSProperties['minHeight']>;
export declare const SELECT_PICKER_MULTI_VALUE_LABEL_SIZE_MAP: Record<SelectPickerProps['size'], CSSProperties['lineHeight']>;
