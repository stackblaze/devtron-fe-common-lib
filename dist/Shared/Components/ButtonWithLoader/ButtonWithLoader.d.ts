import { default as React, Component } from 'react';
export interface ButtonWithLoaderProps {
    disabled?: boolean;
    rootClassName: string;
    isLoading: boolean;
    onClick?: (event: any) => void;
    dataTestId?: string;
    children?: React.ReactNode;
    type?: 'submit' | 'reset' | 'button';
}
/**
 * @deprecated use Button instead
 */
export declare class ButtonWithLoader extends Component<ButtonWithLoaderProps> {
    constructor(props: any);
    clickHandler(event: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
