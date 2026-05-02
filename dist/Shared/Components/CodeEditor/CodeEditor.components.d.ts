import { ReactNode } from 'react';
import { CodeEditorHeaderProps, CodeEditorStatusBarProps } from './types';
export declare const Header: ({ children, className, hideDefaultSplitHeader }: CodeEditorHeaderProps) => import("react/jsx-runtime").JSX.Element;
export declare const Warning: ({ className, text, children }: CodeEditorStatusBarProps) => import("react/jsx-runtime").JSX.Element;
export declare const ErrorBar: ({ className, text, children }: CodeEditorStatusBarProps) => import("react/jsx-runtime").JSX.Element;
export declare const Information: ({ className, children, text }: CodeEditorStatusBarProps) => import("react/jsx-runtime").JSX.Element;
export declare const Clipboard: () => import("react/jsx-runtime").JSX.Element;
export declare const Container: ({ children, flexExpand }: {
    children: ReactNode;
    flexExpand?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
