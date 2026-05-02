import { SelectPickerProps } from './type';
/**
 * Generic component for select picker
 *
 * @example With icon in control
 * ```tsx
 * <SelectPicker ... icon={<CustomIcon />} />
 * ```
 *
 * @example Medium menu list width
 * ```tsx
 * <SelectPicker ... menuSize={ComponentSizeType.medium} />
 * ```
 *
 * @example Large menu list width
 * ```tsx
 * <SelectPicker ... menuSize={ComponentSizeType.large} />
 * ```
 *
 * @example Required label
 * ```tsx
 * <SelectPicker ... required label="Label" />
 * ```
 *
 * @example Custom label
 * ```tsx
 * <SelectPicker ... label={<div>Label</div>} />
 * ```
 *
 * @example Error state
 * ```tsx
 * <SelectPicker ... error="Something went wrong" />
 * ```
 *
 * @example Helper text
 * ```tsx
 * <SelectPicker ... helperText="Help information" />
 * ```
 *
 * @example Menu list footer config
 * The footer is sticky by default
 * ```tsx
 * <SelectPicker
 *      ...
 *      menuListFooterConfig={{
 *          type: 'text',
 *          value: 'Info text',
 *      }}
 * />
 * ```
 *
 * @example Loading state
 * ```tsx
 * <SelectPicker ... isLoading />
 * ```
 *
 * @example Disabled state
 * ```tsx
 * <SelectPicker ... isDisabled />
 * ```
 *
 * @example Loading & disabled state
 * ```tsx
 * <SelectPicker ... isLoading isDisabled />
 * ```
 *
 * @example Hide selected option icon in control
 * ```tsx
 * <SelectPicker ... showSelectedOptionIcon={false} />
 * ```
 *
 * @example Selected option clearable
 * ```tsx
 * <SelectPicker ... isClearable />
 * ```
 *
 * @example Selected option clearable
 * ```tsx
 * <SelectPicker ... showSelectedOptionsCount />
 * ```
 * @example Multi Select
 * ```tsx
 * <SelectPicker ... isMulti />
 * ```
 *
 * @example Creatable Multi Select
 * ```tsx
 * <SelectPicker
 *      ...
 *      isMulti
 *      multiSelectProps={{
 *          isCreatable: true
 *      }}
 * />
 * ```
 *
 * @example Multi Select with group heading selectable
 * ```tsx
 * <SelectPicker
 *      ...
 *      isMulti
 *      multiSelectProps={{
 *          isGroupHeadingSelectable: true
 *      }}
 * />
 * ```
 *
 * @example Multi Select with selected option validator
 * ```tsx
 * <SelectPicker
 *      ...
 *      isMulti
 *      multiSelectProps={{
 *          getIsOptionValid: (option) => boolean
 *      }}
 * />
 * ```
 *
 * @example Custom options rendering support (menuIsOpen needs to be handled by consumer)
 * ```tsx
 * <SelectPicker
 *      ...
 *      shouldRenderCustomOptions
 *      renderCustomOptions={() => <div />}
 * />
 * ```
 *
 * @example Align the menu at the right most end
 * ```tsx
 * <SelectPicker
 *      ...
 *      shouldMenuAlignRight
 * />
 * ```
 */
declare const SelectPicker: <OptionValue, IsMulti extends boolean>({ error, icon, keyboardShortcut, helperText, placeholder, label, showSelectedOptionIcon, size, disabledTippyContent, showSelectedOptionsCount, menuSize, optionListError, reloadOptionList, menuPosition, variant, disableDescriptionEllipsis, isUserIdentifier, multiSelectProps, isMulti, name, classNamePrefix, shouldRenderCustomOptions, isSearchable, selectRef: refFromConsumer, shouldMenuAlignRight, fullWidth, customSelectedOptionsCount, menuListFooterConfig, isCreatable, onCreateOption, closeMenuOnSelect: _closeMenuOnSelect, shouldShowNoOptionsMessage, shouldRenderTextArea, onKeyDown, shouldHideMenu, warningText, layout, ariaLabel, borderConfig, borderRadiusConfig, labelTippyCustomizedConfig, labelTooltipConfig, hideFormFieldInfo, autoFocus, showCheckboxForMultiSelect, ...props }: SelectPickerProps<OptionValue, IsMulti>) => import("react/jsx-runtime").JSX.Element;
export default SelectPicker;
