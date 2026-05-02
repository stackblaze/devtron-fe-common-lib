import { ButtonComponentType, ButtonProps } from './types';
/**
 * Generic component for Button.
 * Should be used in combination of variant, size and style.
 *
 * @example Default button
 * ```tsx
 * <Button text="Hello World"  />
 * ```
 *
 * @example Custom variant
 * ```tsx
 * <Button text="Hello World" variant={ButtonVariantType.secondary}  />
 * ```
 *
 * @example Custom size
 * ```tsx
 * <Button text="Hello World" size={ComponentSizeType.medium}  />
 * ```
 *
 * @example Custom style
 * ```tsx
 * <Button text="Hello World" style={ButtonStyleType.positive}  />
 * ```
 *
 * @example Disabled state
 * ```tsx
 * <Button text="Hello World" disabled  />
 * ```
 *
 * @example Loading state
 * ```tsx
 * <Button text="Hello World" isLoading  />
 * ```
 *
 * @example With start icon
 * ```tsx
 * <Button text="Hello World" startIcon={<ICCube />}  />
 * ```
 *
 * @example With end icon
 * ```tsx
 * <Button text="Hello World" endIcon={<ICCube />}  />
 * ```
 *
 * @example With tippy
 * ```tsx
 * <Button text="Hello World" showTippy tippyContent="Tippy content"  />
 * ```
 *
 * @example With onClick
 * ```tsx
 * <Button text="Hello World" onClick={noop}  />
 * ```
 *
 * @example Link component
 * ```tsx
 * <Button component={ButtonComponentType.link} linkProps={{ to: '#' }} />
 * ```
 *
 * @example Icon button
 * ```tsx
 * <Button icon={<ICCube />} ariaLabel="Label" />
 * ```
 */
declare const Button: ({ dataTestId, text, variant, size, style, fontWeight, startIcon, endIcon, disabled, isLoading, showTooltip, tooltipProps, icon, ariaLabel, showAriaLabelInTippy, fullWidth, isOpacityHoverChild, triggerAutoClickTimestamp, ref, ...props }: ButtonProps<ButtonComponentType>) => import("react/jsx-runtime").JSX.Element;
export default Button;
