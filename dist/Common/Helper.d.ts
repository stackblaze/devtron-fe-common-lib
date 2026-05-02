import { default as React, SyntheticEvent } from 'react';
import { JSONPathOptions } from 'jsonpath-plus';
import { AsyncOptions, DeploymentNodeType, UseSearchString } from './Types';
import { scrollableInterface, AppType } from '../Shared';
import * as Sentry from '@sentry/browser';
export declare function showError(serverError: any, showToastOnUnknownError?: boolean, hideAccessError?: boolean): void;
interface ConditionalWrapper<T> {
    condition: boolean;
    wrap: (children: T) => T;
    children: T;
}
export declare const ConditionalWrap: React.FC<ConditionalWrapper<any>>;
export declare function sortCallback(key: string, a: any, b: any, isCaseSensitive?: boolean): 1 | -1 | 0;
export declare const stopPropagation: (event: any) => void;
export declare const preventDefault: (event: SyntheticEvent) => void;
export declare function useThrottledEffect(callback: any, delay: any, deps?: any[]): void;
export declare function getRandomColor(email: string): string;
export declare const getAlphabetIcon: (str: string, rootClassName?: string) => import("react/jsx-runtime").JSX.Element;
export declare const getEmptyArrayOfLength: (length: number) => unknown[];
export declare function noop(...args: any[]): any;
export declare function not(e: any): boolean;
export declare const refresh: () => void;
export declare const reportIssue: () => void;
export declare function useEffectAfterMount(cb: any, dependencies: any): void;
export declare function getCookie(sKey: any): string;
export declare function handleUTCTime(ts: string, isRelativeTime?: boolean): string;
export declare const getFormattedUTCTimeForExport: (timeToConvert: string, fallback?: string) => string;
export declare function useSearchString(): UseSearchString;
export declare const closeOnEscKeyPressed: (e: any, actionClose: () => void) => void;
export declare function useJsonYaml(value: any, tabSize?: number, language?: string, shouldRun?: boolean): any[];
export declare function cleanKubeManifest(manifestJsonString: string): string;
/**
 * This is a promise<void> that will resolve if str is successfully copied
 * On HTTP (other than localhost) system clipboard is not supported, so it will use the unsecureCopyToClipboard function
 * @param str
 */
export declare function copyToClipboard(str: string): Promise<void>;
export declare function useAsync<T>(func: (...rest: any[]) => Promise<T>, dependencyArray?: any[], shouldRun?: boolean, options?: AsyncOptions): [boolean, T, any | null, () => void, React.Dispatch<any>, any[]];
export declare const processDeployedTime: (lastDeployed: any, isArgoInstalled: any) => string;
/**
 * Appends search parameters to the url as a query string
 *
 * @param url URL to which the search params needs to be added
 * @param params Object for the search parameters
 */
export declare const getUrlWithSearchParams: <T extends string | number = string | number>(url: string, params?: Partial<Record<T, any>>) => string;
/**
 * Custom exception logger function for logging errors to sentry
 */
export declare const logExceptionToSentry: typeof Sentry.captureException;
export declare const customStyles: {
    control: (base: any, state: any) => any;
    indicatorSeparator: (base: any, state: any) => any;
    valueContainer: (base: any, state: any) => any;
    dropdownIndicator: (base: any, state: any) => any;
};
export declare const getFilteredChartVersions: (charts: any, selectedChartType: any) => any;
/**
 * Removes nulls from the arrays in the provided object
 * @param {object} object from which we need to delete nulls in its arrays
 * @returns object after removing (in-place) the null items in arrays
 */
export declare const recursivelyRemoveSymbolFromArraysInObject: (object: object, symbol: symbol) => object;
/**
 * Merges the objects into one object
 * Works more like Object.assign; that doesn't deep copy
 * @param {object[]} objects list of js objects
 * @returns object after the merge
 */
export declare const joinObjects: (objects: object[]) => {};
/**
 * Builds an object from the provided path
 * @param {string} path JSON pointer path of the form /path/to/1/...
 * @param {any} value property value
 * @returns final object formed from the path
 */
export declare const buildObjectFromPath: (path: string, value: any) => any;
/**
 * Returns the list of indices at which the regex matched
 * @param string the string to process
 * @param regex @RegExp
 * @returns array of indices where the @regex matched in @string
 */
export declare const getRegexMatchPositions: (string: string, regex: RegExp) => number[];
/**
 * Returns all the substrings from 0th index to progressively next regex match position
 * Eg. Suppose a string is /path/to/folder then it will return [/path, /path/to, /path/to/folder]
 * @param strings list of strings
 * @param regex that matches the separators for the substrings
 * @returns set of substrings
 */
export declare const powerSetOfSubstringsFromStart: (strings: string[], regex: RegExp) => string[];
export declare const convertJSONPointerToJSONPath: (pointer: string) => string;
export declare const flatMapOfJSONPaths: (paths: string[], json: object, resultType?: JSONPathOptions["resultType"]) => string[];
export declare const applyCompareDiffOnUneditedDocument: (uneditedDocument: object, editedDocument: object) => any;
/**
 * Returns a debounced variant of the function
 * @deprecated - It should use useRef instead, pls use useDebounce
 */
export declare const debounce: (func: any, timeout?: number) => (this: any, ...args: any[]) => void;
export declare const useDebounce: <Callback extends (...args: any[]) => void>(cb: Callback, delay: number) => (...args: Parameters<Callback>) => void;
/**
 * Returns a capitalized string with first letter in uppercase and rest in lowercase
 */
export declare const capitalizeFirstLetter: (text: string) => string;
export declare const handleRelativeDateSorting: (dateStringA: any, dateStringB: any, sortOrder: any) => number;
/**
 * Returns a stringified YAML with default indentation & line width
 */
export declare const YAMLStringify: (obj: object | unknown, option?: object) => string;
/**
 * compare Object Length of the object
 */
export declare const compareObjectLength: (objA: any, objB: any) => boolean;
/**
 * Return deep copy of the object
 */
export declare function deepEqual(configA: any, configB: any): boolean;
export declare function shallowEqual(objA: any, objB: any): boolean;
export declare function useInterval(callback: any, delay: any): void;
export declare function useScrollable(options: scrollableInterface): ((e: any) => void)[];
export declare function useKeyDown(): any[];
export declare const DropdownIndicator: (props: any) => import("react/jsx-runtime").JSX.Element;
export declare function mapByKey<T = Map<any, any>>(arr: any[], id: string): T;
export declare function asyncWrap(promise: any): any[];
export declare const prefixZeroIfSingleDigit: (value?: number) => string | number;
export declare const throttle: <T extends (...args: unknown[]) => unknown>(func: T, delay?: number) => ((...args: Parameters<T>) => void);
/**
 *
 * @param sourceType - SourceTypeMap
 * @param _isRegex - boolean
 * @param webhookEventName - WebhookEventNameType
 * @returns - Icon
 */
export declare const getBranchIcon: (sourceType: any, _isRegex?: boolean, webhookEventName?: string) => import("react/jsx-runtime").JSX.Element;
export declare const getSanitizedIframe: (iframeString: string) => string;
/**
 * This method adds default attributes to iframe - title, loading ="lazy", width="100%", height="100%"
 */
export declare const getIframeWithDefaultAttributes: (iframeString: string, defaultName?: string) => string;
export declare const getStageTitle: (stageType: DeploymentNodeType) => string;
export declare const getGoLangFormattedDateWithTimezone: (dateFormat: string) => string;
/**
 *
 * @returns SHA-256 hashed value
 */
export declare const getHashedValue: (value: string) => Promise<string | null>;
export declare const getTTLInHumanReadableFormat: (ttl: number) => string;
export declare const getAIAnalyticsEvents: (context: string, appType?: AppType) => string;
export declare const findRight: <T>(arr: T[], predicate: (item: T) => boolean) => T | null;
export {};
