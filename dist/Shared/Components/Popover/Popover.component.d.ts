import { PopoverProps } from './types';
/**
 * Popover Component \
 * This component serves as a base for creating popovers. It is not intended to be used directly.
 * @note Use this component in conjunction with the `usePopover` hook to create a custom popover component. \
 * For example, see the `ActionMenu` component for reference.
 */
export declare const Popover: ({ open, popoverProps, overlayProps, triggerProps: { bounds, ...triggerProps }, buttonProps, triggerElement, children, }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
