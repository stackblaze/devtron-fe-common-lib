import { TabGroupProps, TabProps } from './TabGroup.types';
export declare const getTabIcon: ({ icon, showError, showWarning, className, size, active, iconElement, }: Pick<TabProps, "showError" | "showWarning" | "icon" | "active" | "iconElement"> & Pick<TabGroupProps, "size"> & {
    className: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const getTabBadge: (badge: TabProps["badge"], className: string) => import("react/jsx-runtime").JSX.Element;
export declare const getTabIndicator: (showIndicator: TabProps["showIndicator"]) => import("react/jsx-runtime").JSX.Element;
export declare const getTabDescription: (description: TabProps["description"]) => import("react/jsx-runtime").JSX.Element;
