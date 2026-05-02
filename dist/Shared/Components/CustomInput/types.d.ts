import { InputHTMLAttributes, MutableRefObject } from 'react';
import { ComponentSizeType } from '../../constants';
import { ButtonComponentType, ButtonProps } from '../Button';
import { FormFieldWrapperProps } from '../FormFieldWrapper';
export interface CustomInputProps extends Omit<FormFieldWrapperProps, 'children' | 'inputId'>, Pick<InputHTMLAttributes<HTMLInputElement>, 'onBlur' | 'disabled' | 'autoFocus' | 'onFocus' | 'onKeyDown'>, Required<Pick<InputHTMLAttributes<HTMLInputElement>, 'placeholder' | 'onChange' | 'value' | 'name'>> {
    /**
     * If false, the input is not trimmed on blur
     *
     * @default true
     */
    shouldTrim?: boolean;
    /**
     * Size of the input
     *
     * @default ComponentSizeType.large
     */
    size?: Extract<ComponentSizeType, ComponentSizeType.medium | ComponentSizeType.large>;
    /**
     * Type for the input
     *
     * Note: For password field, use PasswordField component
     *
     * @default 'text'
     */
    type?: Exclude<InputHTMLAttributes<HTMLInputElement>['type'], 'password'>;
    /**
     * End icon button configuration
     */
    endIconButtonConfig?: Required<Pick<ButtonProps<ButtonComponentType.button>, 'icon' | 'onClick' | 'ariaLabel'>> & Pick<ButtonProps<ButtonComponentType.button>, 'disabled' | 'showAriaLabelInTippy' | 'style'>;
    /**
     * Ref for the input element
     */
    inputRef?: MutableRefObject<HTMLInputElement>;
}
export interface PasswordFieldProps extends Omit<CustomInputProps, 'endIconButtonConfig' | 'type'> {
    /**
     * If true, the value is cleared & default placeholder is shown on blur
     */
    shouldShowDefaultPlaceholderOnBlur: boolean;
}
