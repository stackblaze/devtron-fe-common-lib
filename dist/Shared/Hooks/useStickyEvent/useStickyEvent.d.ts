import { UseStickyEventProps, UseStickyEventReturnType } from './types';
/**
 * Please read
 *   https://developer.chrome.com/docs/css-ui/sticky-headers
 * as a reference for the implementation
 */
declare const useStickyEvent: <T extends HTMLElement = HTMLDivElement>({ containerSelector, containerRef, identifier, isStickyElementMounted, }: UseStickyEventProps<T>) => UseStickyEventReturnType<T>;
export default useStickyEvent;
