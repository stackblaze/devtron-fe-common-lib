import { ReactElement } from 'react';
import { StrictRJSFSchema } from '@rjsf/utils';
import { Pair } from 'yaml';
import { MaterialHistoryType } from './Services/app.types';
import { ApprovalConfigDataType, MaterialInfo, SortingOrder, UserApprovalConfigType, UserApprovalInfo } from '../Common';
import { GVKType } from '../Pages';
import { AggregatedNodes } from './Components';
import { BorderConfigType, GetTimeDifferenceParamsType, GitTriggers, IntersectionChangeHandler, IntersectionOptions, Node, PodMetaData, TargetPlatformItemDTO, TargetPlatformsDTO, WebhookEventNameType } from './types';
interface HighlightSearchTextProps {
    /**
     * The text to be highlighted
     */
    searchText: string;
    /**
     * The whole text string
     */
    text: string;
    /**
     * The classes to be applied to the highlighted text
     */
    highlightClasses?: string;
}
export declare const escapeRegExp: (text: string) => string;
export declare const highlightSearchText: ({ searchText, text, highlightClasses }: HighlightSearchTextProps) => string;
export declare const preventBodyScroll: (lock: boolean) => void;
export declare const getIsMaterialInfoAvailable: (materialInfo: MaterialInfo[]) => boolean;
export declare const getGitCommitInfo: (materialInfo: MaterialInfo) => GitTriggers;
export declare const stringComparatorBySortOrder: (a: string, b: string, sortOrder?: SortingOrder, isCaseSensitive?: boolean) => number;
export declare const numberComparatorBySortOrder: (a: number, b: number, sortOrder?: SortingOrder) => number;
export declare function versionComparatorBySortOrder(a: string, b: string, orderBy?: SortingOrder): number;
export declare const dateComparatorBySortOrder: (a: string | number | Date, b: string | number | Date, sortOrder?: SortingOrder) => number;
export declare const getWebhookEventIcon: (eventName: WebhookEventNameType) => import("react/jsx-runtime").JSX.Element;
export declare const yamlComparatorBySortOrder: (a: Pair, b: Pair, sortOrder?: SortingOrder) => number;
export declare const useIntersection: (target: React.RefObject<Element> | Element | null, options?: IntersectionOptions, callback?: IntersectionChangeHandler) => boolean;
export declare const isNullOrUndefined: (value: unknown) => boolean;
export declare const handleDisableSubmitOnEnter: (event: React.KeyboardEvent<HTMLFormElement>) => void;
export declare const getKeyToBooleanMapFromArray: <T extends string | number>(arr?: T[]) => Record<T, boolean>;
export declare const renderValidInputButtonTippy: (children: ReactElement) => import("react/jsx-runtime").JSX.Element;
export declare function aggregateNodes(nodes: any[], podMetadata: PodMetaData[]): AggregatedNodes;
export declare const decode: (data: any, isEncoded?: boolean) => {};
export declare const isTimeStringAvailable: (time: string) => boolean;
export declare const getTimeDifference: ({ startTime, endTime, fallbackString, }: GetTimeDifferenceParamsType) => string;
export declare const getFileNameFromHeaders: (headers: Headers) => string;
export declare const sanitizeUserApprovalList: (approverList: UserApprovalInfo["approverList"]) => UserApprovalInfo["approverList"];
export declare const sanitizeApprovalConfigData: (approvalConfigData: ApprovalConfigDataType | null) => ApprovalConfigDataType;
/**
 * Manual approval is considered configured only if the type is not notConfigured
 */
export declare const getIsManualApprovalConfigured: (userApprovalConfig?: Pick<UserApprovalConfigType, "type">) => boolean;
export declare const getIsApprovalPolicyConfigured: (approvalConfigData: ApprovalConfigDataType) => boolean;
/**
 * @description - Function to open a new tab with the given url
 * @param url - url to be opened in new tab
 */
export declare const getHandleOpenURL: (url: string) => () => void;
export declare const getDefaultValueFromType: (value: unknown) => {};
/**
 * Groups an array of objects by a specified key.
 *
 * This function takes an array of objects and a key, and groups the objects in the array
 * based on the value of the specified key. If an object does not have the specified key,
 * it will be grouped under the `'UNGROUPED'` key.
 *
 * @param array - The array of objects to be grouped.
 * @param key - The key of the object used to group the array.
 * @returns An object where the keys are the unique values of the specified key in the array,
 * and the values are arrays of objects that share the same key value.
 */
export declare const groupArrayByObjectKey: <T extends Record<string, any>, K extends keyof T>(array: T[], key: K) => Record<string, T[]>;
/**
 * This function returns a null/zero value corresponding to @type
 *
 * @param type - a RJSF supported type
 */
export declare const getNullValueFromType: (type: StrictRJSFSchema["type"]) => any;
export declare const getLowerCaseObject: (input: any) => Record<string, any>;
/**
 * @description - Function to get the webhook date
 * @param materialSourceType - The type of material source (e.g., WEBHOOK)
 * @param history - The history object containing commit information
 * @returns - Formatted webhook date if available, otherwise an empty string
 */
export declare const getWebhookDate: (materialSourceType: string, history: MaterialHistoryType) => string;
export declare const getUniqueId: (size?: number) => string;
export declare const sanitizeTargetPlatforms: (targetPlatforms: TargetPlatformsDTO["targetPlatforms"]) => TargetPlatformItemDTO[];
export declare const isAWSCodeCommitURL: (url?: string) => boolean;
export declare const renderMaterialIcon: (url?: string) => import("react/jsx-runtime").JSX.Element;
export declare const deriveBorderRadiusAndBorderClassFromConfig: ({ borderConfig, borderRadiusConfig, }: {
    borderConfig: BorderConfigType | undefined;
    borderRadiusConfig: BorderConfigType | undefined;
}) => string;
export declare const getClassNameForStickyHeaderWithShadow: (isStuck: boolean, topClassName?: string) => string;
export declare const clearCookieOnLogout: () => void;
export declare const getAppDetailsURL: (appId: number | string, envId?: number | string) => string;
export declare const smoothScrollToTop: (scrollContainer: HTMLElement, targetPosition: number) => import('motion-dom').AnimationPlaybackControls;
export declare const getGroupVersionFromApiVersion: (apiVersion: string) => Pick<Node, "group" | "version">;
export declare const YAMLtoJSON: (yamlString: string) => string;
export declare const formatNumberToCurrency: (value: number, currency: string, minimumFractionDigits?: number) => string;
/**
 * Returns the human readable explanation of the expression
 * NOTE: expectation is that the expression is valid
 *
 * @throws Error - if given expression is incorrect
 * @param expression
 * @returns string - helper text explaining the expression in a human readable format
 */
export declare const explainCronExpression: (expression: string) => string;
export declare const getGVKTitle: (gvk: GVKType) => string;
export {};
