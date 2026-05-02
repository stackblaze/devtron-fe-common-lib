import { DTFocusTrapType } from '../../Shared/Components/DTFocusTrap';
export interface DrawerProps extends Pick<DTFocusTrapType, 'initialFocus'> {
    position: 'left' | 'right' | 'bottom' | 'top';
    children?: any;
    backdrop?: boolean;
    onClose?: (e: any) => void;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    parentClassName?: string;
    onEscape?: (e?: any) => void;
    disableTransition?: boolean;
}
export declare const Drawer: ({ children, position, height, width, minWidth, maxWidth, parentClassName, onEscape, onClose, disableTransition, initialFocus, }: DrawerProps) => import("react/jsx-runtime").JSX.Element;
