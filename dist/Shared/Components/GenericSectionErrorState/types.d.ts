import { JSX, ReactNode } from 'react';
import { ButtonComponentType, ButtonProps } from '../Button';
import { IconsProps } from '../Icon';
export type GenericSectionErrorStateProps<ButtonType extends ButtonComponentType = ButtonComponentType.button> = {
    /**
     * If true, border is added to the section
     *
     * @default false
     */
    withBorder?: boolean;
    /**
     * @default 'Failed to load'
     */
    title?: string;
    /**
     * @default 'We could not load the information on this page.'
     */
    subTitle?: ReactNode;
    /**
     * @default 'Please reload or try again later'
     */
    description?: ReactNode;
    /**
     * @default 'Reload'
     */
    buttonText?: string;
    /**
     * to be applied on parent div
     */
    rootClassName?: string;
} & ({
    /**
     * If provided, Icon with ic-circle-loader
     */
    progressingProps: Omit<IconsProps, 'name'>;
    useInfoIcon?: false;
    customIcon?: never;
} | {
    progressingProps?: never;
    /**
     * If true, info icon would be used instead of error
     *
     * @default false
     */
    useInfoIcon: true;
    customIcon?: never;
} | {
    progressingProps?: never;
    useInfoIcon?: never;
    customIcon?: never;
} | {
    customIcon: JSX.Element;
    progressingProps?: never;
    useInfoIcon?: never;
}) & ({
    /**
     * Handler for reloading the section
     */
    reload: () => void;
    buttonProps?: never;
} | {
    reload?: never;
    buttonProps: ButtonProps<ButtonType>;
} | {
    reload?: never;
    buttonProps?: never;
});
