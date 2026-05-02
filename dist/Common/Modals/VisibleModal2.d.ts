import { Component, PropsWithChildren, SyntheticEvent } from 'react';
import { DTFocusTrapType } from '../../Shared/Components/DTFocusTrap';
export declare class VisibleModal2 extends Component<PropsWithChildren<{
    className?: string;
    close?: (e?: any) => void;
    initialFocus?: DTFocusTrapType['initialFocus'];
}>> {
    constructor(props: any);
    handleBodyClick: (e: SyntheticEvent) => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
