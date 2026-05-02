import { Component, PropsWithChildren } from 'react';
import { DialogFormProps } from './Types';
export declare class DialogForm extends Component<PropsWithChildren<DialogFormProps>> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    escFunction(event: any): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export declare class DialogFormSubmit extends Component<PropsWithChildren<{
    tabIndex: number;
}>> {
    render(): import("react/jsx-runtime").JSX.Element;
}
