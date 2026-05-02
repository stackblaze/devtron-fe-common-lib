import { PopupMenuBodyType, PopupMenuButtonType, PopupMenuType } from './Types';
declare const PopupMenu: {
    ({ children, onToggleCallback, autoClose, autoPosition, shouldPreventDefault, }: PopupMenuType): any;
    Button: ({ children, disabled, rootClassName, tabIndex, onHover, isKebab, dataTestId, }: PopupMenuButtonType) => import("react/jsx-runtime").JSX.Element;
    Body: ({ children, rootClassName, style, autoWidth, preventWheelDisable, noBackDrop, }: PopupMenuBodyType) => import("react/jsx-runtime").JSX.Element;
};
export default PopupMenu;
