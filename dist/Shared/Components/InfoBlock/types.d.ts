import { ReactElement, ReactNode } from 'react';
import { ComponentSizeType, InfoBlockVariantType } from '../../constants';
import { BorderConfigType, ComponentLayoutType } from '../../types';
import { ButtonComponentType, ButtonProps } from '../Button';
export type InfoBlockProps = {
    /**
     * @default 'row'
     */
    layout?: ComponentLayoutType;
    /**
     * @default 'information'
     */
    variant?: InfoBlockVariantType;
    /**
     * @default ComponentSizeType.large
     */
    size?: Extract<ComponentSizeType, ComponentSizeType.large | ComponentSizeType.medium>;
    /**
     * If given would override the default icon derived from type
     */
    customIcon?: ReactElement;
    buttonProps?: ButtonProps<ButtonComponentType>;
    borderConfig?: BorderConfigType;
    borderRadiusConfig?: BorderConfigType;
} & ({
    /**
     * If string, would apply h tag with necessary classes
     */
    heading: ReactNode;
    /**
     * If string, would apply p tag with necessary classes
     */
    description: ReactNode;
} | {
    heading?: never;
    description: ReactNode;
} | {
    heading: ReactNode;
    description?: never;
});
