import { default as React } from 'react';
import { BreadcrumbTextProps } from './Types';
export declare const BreadcrumbText: ({ heading, isActive, shouldTruncate }: BreadcrumbTextProps) => import("react/jsx-runtime").JSX.Element;
export declare const getBreadCrumbSeparator: (sep?: string) => import("react/jsx-runtime").JSX.Element;
declare const Store: ({ children }: {
    children: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const BreadcrumbContext: React.Context<{
    state: {
        alias: {};
    };
    setState: any;
}>;
export declare function useBreadcrumbContext(): {
    state: {
        alias: {};
    };
    setState: any;
};
export default Store;
