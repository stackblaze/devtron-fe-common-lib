import { SelectPickerProps } from '../SelectPicker';
import { RecentlyVisitedGroupedOptionsType, RecentlyVisitedOptions } from './types';
export declare const getDisabledOptions: (option: RecentlyVisitedOptions) => SelectPickerProps["isDisabled"];
export declare const customSelectFilterOption: SelectPickerProps['filterOption'];
export declare const getMinCharSearchPlaceholderGroup: (resourceKind: string) => RecentlyVisitedGroupedOptionsType;
