import { OptionType } from '../../../Common';
import { GroupedOptionsType } from '../../types';
import { commonSelectStyles } from '../ReactSelect';
export type SelectedEnvironmentsMapType<T> = Record<string, T>;
export type BaseSelectorType = {
    isMulti: true;
    handleEnvironmentChange: (options: OptionType[]) => void;
} | {
    isMulti: false;
    handleEnvironmentChange: (option: OptionType) => void;
};
export type EnvironmentSelectorProps<T> = BaseSelectorType & {
    /**
     * Would expect selected option to be like {[selectedOption1.label] = <any value we want to store>, ...}
     */
    selectedEnvironmentsMap?: SelectedEnvironmentsMapType<T>;
    placeholder?: string;
    /**
     * This is a HEAVY operation, so make sure to wrap it in useCallback
     * In case we want to process (filter, rename label, etc) the options before displaying them
     */
    processOptions?: (options: GroupedOptionsType[]) => GroupedOptionsType[];
    styles?: typeof commonSelectStyles;
    isClearable?: boolean;
    autoFocus?: boolean;
};
