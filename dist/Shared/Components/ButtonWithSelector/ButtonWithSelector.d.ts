import { ButtonWithSelectorProps } from './types';
/**
 * Button With Selector
 * @param content Content to show in button
 * @param onClick Handler Function for button click
 * @param children Dropdown Content
 * @param className Other Classes to be applied
 *
 * @example
 * ```tsx
 * <ButtonWithSelector content='Create Job' onClick={() => {}} className=''>
 *  {dropdownOptions}
 * </ButtonWithSelector>
 * ```
 */
declare const ButtonWithSelector: ({ content, onClick, children, className, popUpBodyClassName, showPopUp, disabled, isLoading, }: ButtonWithSelectorProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonWithSelector;
