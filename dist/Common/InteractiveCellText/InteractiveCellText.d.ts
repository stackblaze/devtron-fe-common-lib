import { InteractiveCellTextProps } from './types';
/**
 * A reusable component for rendering text within a tooltip. The text can be interactive (clickable) or static.
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.text - The text to display inside the component. Defaults to `'-'` if not provided.
 * @param {function} [props.onClickHandler] - Optional click handler function. If provided, the text will be rendered as a button.
 * @param {string} [props.dataTestId] - Optional test ID for the component, useful for testing purposes.
 * @param {string} [props.rootClassName] - Additional CSS class names to apply to the root element.
 * @param {boolean} [props.interactive=false] - Whether the tooltip content is interactive.
 * @param {number} [props.fontSize=13] - Font size for the text. Defaults to `13`.
 * @param {React.ReactNode} [props.tippyContent=null] - Custom content for the tooltip. If not provided, `text` will be used.
 * @returns {JSX.Element} The rendered `InteractiveCellText` component.
 *
 * @example
 * // Example usage:
 * <InteractiveCellText
 *     text="Click me"
 *     onClickHandler={() => alert('Clicked!')}
 *     dataTestId="interactive-cell"
 *     rootClassName="custom-class"
 *     interactive={true}
 *     fontSize={14}
 *     tippyContent="Tooltip content"
 * />
 */
export declare const InteractiveCellText: ({ text, onClickHandler, dataTestId, rootClassName, interactive, fontSize, tippyContent, }: InteractiveCellTextProps) => import("react/jsx-runtime").JSX.Element;
