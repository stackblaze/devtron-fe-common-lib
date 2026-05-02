import { PropsWithChildren } from 'react';
import { ConfirmationModalContextType } from './types';
export declare const ConfirmationModalContext: import('react').Context<ConfirmationModalContextType>;
export declare const ConfirmationModalProvider: ({ children }: PropsWithChildren<{}>) => import("react/jsx-runtime").JSX.Element;
export declare const useConfirmationModalContext: () => ConfirmationModalContextType;
