import { ViewErrorType } from './types';
export declare class ViewError implements ViewErrorType {
    title: string;
    subTitle: string;
    constructor(title: string, subTitle: string);
}
