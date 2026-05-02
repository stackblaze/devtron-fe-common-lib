import { SelectPickerOptionType } from '../SelectPicker';
/**
 * Return the options for the dates in label and value format
 */
export declare const MONTHLY_DATE_OPTIONS: {
    label: string;
    value: string;
}[];
/**
 * Return the options for the time in label and value format
 * @type {SelectPickerOptionType[]}
 */
export declare const DEFAULT_TIME_OPTIONS: SelectPickerOptionType<string>[];
/**
 * Get the time value from the date object in the format: `hh:mm:ss`
 */
export declare const getTimeValue: (currentDateObj: Date) => string;
/**
 * Updates the time in the given date object and returns the updated object
 */
export declare const updateTime: (currentDateObj: Date, timeString: string) => {
    label: Date;
    value: Date;
};
/**
 * Updates the date in the given date object and returns the updated object
 */
export declare const updateDate: (currentDateObj: Date, newDate: Date) => Date;
/**
 * Get the default date from the time to live
 * @param timeToLive
 * @returns
 */
export declare const getDefaultDateFromTimeToLive: (timeToLive: string, isTomorrow?: boolean) => Date;
