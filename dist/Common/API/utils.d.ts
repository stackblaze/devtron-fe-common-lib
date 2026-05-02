import { MutableRefObject } from 'react';
export declare const handleServerError: (contentType: string, response: Response) => Promise<never>;
/**
 * Aborts the previous request before triggering next request
 */
export declare const abortPreviousRequests: <T>(callback: () => Promise<T>, abortControllerRef: MutableRefObject<AbortController>) => Promise<T>;
/**
 * Returns true if the error is due to a aborted request
 */
export declare const getIsRequestAborted: (error: any) => boolean;
export declare const handleDashboardLogout: () => void;
export declare const handleRedirectToLicenseActivation: () => void;
