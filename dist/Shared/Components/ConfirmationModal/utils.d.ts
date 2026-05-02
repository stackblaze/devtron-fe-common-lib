import { ReactElement, ReactNode } from 'react';
import { ButtonStyleType } from '../Button';
import { ConfirmationModalVariantType } from './types';
export declare const getIconFromVariant: (variant: ConfirmationModalVariantType) => ReactElement;
export declare const getConfirmationLabel: (confirmationKeyword: string) => ReactNode;
export declare const getPrimaryButtonStyleFromVariant: (variant: ConfirmationModalVariantType) => ButtonStyleType;
