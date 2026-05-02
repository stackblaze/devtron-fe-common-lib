import { PropsWithChildren } from 'react';
import { GenericModalFooterProps, GenericModalHeaderProps, GenericModalProps } from './types';
declare const GenericModal: {
    ({ name, open, width, borderRadius, onClose, onEscape, closeOnBackdropClick, children, borderVariant, alignCenter, }: PropsWithChildren<GenericModalProps>): import("react/jsx-runtime").JSX.Element;
    Header: ({ title }: GenericModalHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children }: PropsWithChildren<{}>) => import("react/jsx-runtime").JSX.Element;
    Footer: ({ leftSideElement, buttonConfig, children, }: PropsWithChildren<GenericModalFooterProps>) => import("react/jsx-runtime").JSX.Element;
};
export default GenericModal;
