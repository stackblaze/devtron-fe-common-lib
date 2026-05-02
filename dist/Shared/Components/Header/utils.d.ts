import { HelpActionOptionTypes, HelpButtonActionMenuProps } from './types';
export declare const getDateInMilliseconds: (days: any) => number;
export declare const handlePostHogEventUpdate: (eventName: string) => Promise<void>;
export declare const setActionWithExpiry: (key: string, days: number) => void;
export declare const getHelpActionMenuOptions: ({ isEnterprise, isTrialOrFreemium, docPath, }: HelpActionOptionTypes) => HelpButtonActionMenuProps["options"];
