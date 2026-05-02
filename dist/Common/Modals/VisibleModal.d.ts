import { Component, PropsWithChildren, SyntheticEvent } from 'react';
import { DTFocusTrapType } from '../../Shared/Components/DTFocusTrap';
export declare class VisibleModal extends Component<PropsWithChildren<{
    className?: string;
    parentClassName?: string;
    noBackground?: boolean;
    close?: (e?: any) => void;
    onEscape?: (e?: any) => void;
    initialFocus?: DTFocusTrapType['initialFocus'];
}>> {
    constructor(props: any);
    escFunction(): void;
    handleBodyClick: (e: SyntheticEvent) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
