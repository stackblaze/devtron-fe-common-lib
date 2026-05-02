import { APIOptions, ResponseType } from '../Types';
import { CoreAPIConstructorParamsType } from './types';
declare class CoreAPI {
    handleLogout: () => void;
    handleRedirectToLicenseActivation?: () => void;
    host: string;
    timeout: number;
    constructor({ handleLogout, host, timeout, handleRedirectToLicenseActivation }: CoreAPIConstructorParamsType);
    private fetchAPI;
    /**
     * Merges multiple AbortSignals into a single AbortSignal that aborts
     * as soon as any of the input signals abort.
     *
     * This is useful when you want to race multiple async cancellation signals,
     * for example, to support both a global timeout and a user-triggered abort.
     *
     * @param signals - AbortSignals to merge.
     * @returns An AbortSignal that aborts if any input signal aborts.
     */
    private static mergeAbortSignals;
    private fetchInTime;
    post: <T = any, K = object>(url: string, data: K, options?: APIOptions, isMultipartRequest?: boolean) => Promise<ResponseType<T>>;
    put: <T = any, K = object>(url: string, data: K, options?: APIOptions) => Promise<ResponseType<T>>;
    patch: <T = any, K = object>(url: string, data: K, options?: APIOptions) => Promise<ResponseType<T>>;
    get: <T = any>(url: string, options?: APIOptions) => Promise<ResponseType<T>>;
    trash: <T = any, K = object>(url: string, data?: K, options?: APIOptions) => Promise<ResponseType<T>>;
    setGlobalAPITimeout: (timeout: number) => void;
}
export default CoreAPI;
