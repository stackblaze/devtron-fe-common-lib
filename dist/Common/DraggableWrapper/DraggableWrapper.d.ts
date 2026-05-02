import { DraggableWrapperProps } from './types';
/**
 * TODO: import it as lazy, after it is supported in common
 * 1. If using react select please use menuPlacement='auto'
 * 2. dragSelector will be used to identify the grabbable button that will grab the div to drag
 * 3. The wrapper is positioned at the viewport's top-left (top: 0, left: 0) using fixed positioning; parentRef is an optional
 *    reference that may be used for position calculations but is not the base origin for the coordinate system.
 */
declare const DraggableWrapper: ({ children, zIndex, positionVariant, dragSelector, parentRef, boundaryGap, childDivProps, }: DraggableWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default DraggableWrapper;
