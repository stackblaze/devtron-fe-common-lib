import { UseBulkSelectionProps, UseBulkSelectionReturnType } from './types';
export declare const useBulkSelection: <T>() => UseBulkSelectionReturnType<T>;
export declare const BulkSelectionProvider: <T>({ children, identifiers, getSelectAllDialogStatus, }: UseBulkSelectionProps<T>) => import("react/jsx-runtime").JSX.Element;
