import { TextareaHTMLAttributes } from 'react';
import { ComponentSizeType } from '../../constants';
import { FormFieldWrapperProps } from '../FormFieldWrapper';
export interface TextareaProps extends Omit<FormFieldWrapperProps, 'children' | 'inputId'>, Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onBlur' | 'disabled' | 'autoFocus' | 'onFocus'>, Required<Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'placeholder' | 'onChange' | 'name'>> {
    /**
     * If false, the input is not trimmed on blur
     *
     * @default true
     */
    shouldTrim?: boolean;
    /**
     * Size of the textarea
     *
     * @default ComponentSizeType.large
     */
    size?: Extract<ComponentSizeType, ComponentSizeType.small | ComponentSizeType.medium | ComponentSizeType.large>;
    /**
     * Value of the textarea
     */
    value: string;
    /**
     * If true, the textarea resize is disabled
     *
     * @default false
     */
    disableResize?: true;
    /**
     * Allows inserting a newline with Shift + Enter instead of Enter alone.
     *
     * When enabled, pressing Enter submits the form, while Shift + Enter inserts a newline.
     * Useful for forms where Enter should trigger submission, but multiline input is still needed.
     *
     * @default false
     */
    newlineOnShiftEnter?: boolean;
    textareaRef?: React.MutableRefObject<HTMLTextAreaElement> | React.RefCallback<HTMLTextAreaElement>;
}
