import { MouseEvent, ReactNode } from 'react';
import { DTFocusTrapType } from '../DTFocusTrap';
export interface BackdropProps extends Pick<DTFocusTrapType, 'deactivateFocusOnEscape' | 'initialFocus' | 'onEscape' | 'returnFocusOnDeactivate'> {
    /**
     * The content to be rendered within the backdrop component.
     */
    children: ReactNode;
    /**
     * Callback function that gets triggered when the backdrop is clicked.
     * Useful for dismissing modals or other overlay content.
     * @param e - The mouse event object from the click interaction
     */
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
    /**
     * Determines if the backdrop should be transparent.
     * When true, the backdrop will not have any background color or blur filter.
     * @default false
     */
    hasClearBackground?: boolean;
    /**
     * Callback function that gets triggered when the backdrop component mounts or unmounts.
     * This can be used to perform side effects or state updates when the backdrop's visibility changes.
     * @param isMounted - A boolean indicating whether the backdrop is currently mounted (true) or not (false)
     */
    onBackdropMount?: (isMounted: boolean) => void;
}
