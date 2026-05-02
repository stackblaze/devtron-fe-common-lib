import { HandleAnalyticsEventParams, ServerAnalyticsEventType } from './types';
export declare const handleSendAnalyticsEventToServer: (eventType: ServerAnalyticsEventType, preventLicenseRedirect?: boolean) => Promise<void>;
export declare const handleAnalyticsEvent: ({ category, action }: HandleAnalyticsEventParams) => void;
