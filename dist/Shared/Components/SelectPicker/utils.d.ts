import { GroupBase, MultiValue, OptionsOrGroups, StylesConfig } from 'react-select';
import { CHECKBOX_VALUE } from '../../../Common/Types';
import { SelectPickerOptionType, SelectPickerProps } from './type';
export declare const getCommonSelectStyle: <OptionValue, IsMulti extends boolean>({ error, size, menuSize, variant, getIsOptionValid, isGroupHeadingSelectable, shouldMenuAlignRight, }: Pick<SelectPickerProps<OptionValue, IsMulti>, "error" | "size" | "menuSize" | "variant" | "shouldMenuAlignRight"> & Pick<SelectPickerProps<OptionValue, IsMulti>["multiSelectProps"], "getIsOptionValid" | "isGroupHeadingSelectable">) => StylesConfig<SelectPickerOptionType<OptionValue>>;
export declare const getGroupCheckboxValue: <OptionValue>(groupHeadingOptions: readonly SelectPickerOptionType<OptionValue>[], selectedOptions: MultiValue<SelectPickerOptionType<OptionValue>>, getOptionValue: (option: SelectPickerOptionType<OptionValue>) => string) => CHECKBOX_VALUE.CHECKED | CHECKBOX_VALUE.INTERMEDIATE;
/**
 * Retrieves an option from the options list based on the provided value.
 *
 * @param optionsList - The list of options or groups of options.
 * @param value - The value to compare against the options' values.
 * @param defaultOption - The default option to return if no match is found.
 * @param getOptionValue - Override the default value for the option
 * @returns The matched option or the default option if no match is found.
 */
export declare const getSelectPickerOptionByValue: <OptionValue>(optionsList: OptionsOrGroups<SelectPickerOptionType<OptionValue>, GroupBase<SelectPickerOptionType<OptionValue>>>, value: OptionValue, defaultOption?: SelectPickerOptionType<OptionValue>, getOptionValue?: SelectPickerProps<OptionValue>["getOptionValue"]) => SelectPickerOptionType<OptionValue>;
export declare const getSelectPickerOptionsByValue: <OptionValue>(optionsList: OptionsOrGroups<SelectPickerOptionType<OptionValue>, GroupBase<SelectPickerOptionType<OptionValue>>>, values: OptionValue[]) => SelectPickerOptionType<OptionValue>[];
