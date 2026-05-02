import { default as React } from 'react';
import { Breadcrumbs, UseBreadcrumbOptionalProps, UseBreadcrumbState } from './Types';
export declare const BreadcrumbContext: React.Context<any>;
export declare function useBreadcrumb(pathPattern: string, props?: UseBreadcrumbOptionalProps, deps?: any[]): UseBreadcrumbState;
export declare const BreadCrumb: React.FC<Breadcrumbs>;
