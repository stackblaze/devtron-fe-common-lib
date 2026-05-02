import { PropsWithChildren } from 'react';
import { GenericModalContextType } from './types';
export declare const GenericModalProvider: ({ value, children }: PropsWithChildren<{
    value: GenericModalContextType;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const useGenericModalContext: () => GenericModalContextType;
