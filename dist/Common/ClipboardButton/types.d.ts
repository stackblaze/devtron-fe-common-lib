import { ComponentSizeType } from '../../Shared/constants';
export type ClipboardProps = ({
    /**
     * @default 'default'
     */
    variant?: 'default';
    size?: never;
} | {
    variant: 'button--secondary';
    size: ComponentSizeType;
} | {
    variant: 'borderLess';
    size: ComponentSizeType;
}) & {
    content: string;
    /**
     * tippy text before copying
     */
    initialTippyText?: string;
    /**
     * tippy text after copying
     */
    copiedTippyText?: string;
    /**
     * reset duration after copying
     */
    duration?: number;
    copyToClipboardPromise?: Promise<void>;
    rootClassName?: string;
    iconSize?: number;
    handleSuccess?: () => void;
};
