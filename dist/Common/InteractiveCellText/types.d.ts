import { TippyCustomizedProps } from '../Types';
export interface InteractiveCellTextProps {
    text: string;
    onClickHandler?: () => void;
    dataTestId?: string;
    rootClassName?: string;
    interactive?: boolean;
    fontSize?: number;
    tippyContent?: TippyCustomizedProps<false>['additionalContent'];
}
