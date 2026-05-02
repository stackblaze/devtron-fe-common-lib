import { ClipboardProps } from './types';
/**
 * @param content - Content to be copied
 * @param copiedTippyText - Text to be shown in the tippy when the content is copied, default 'Copied!'
 * @param duration - Duration for which the tippy should be shown, default 1000
 * @param copyToClipboardPromise - the promise returned by copyToClipboard util function
 * @param rootClassName - additional classes to add to button
 * @param iconSize - size of svg icon to be shown, default 16 (icon-dim-16)
 */
export declare const ClipboardButton: ({ content, initialTippyText, copiedTippyText, duration, copyToClipboardPromise, rootClassName, iconSize, handleSuccess, variant, size, }: ClipboardProps) => import("react/jsx-runtime").JSX.Element;
