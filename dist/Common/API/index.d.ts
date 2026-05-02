export declare const post: <T = any, K = object>(url: string, data: K, options?: import('..').APIOptions, isMultipartRequest?: boolean) => Promise<import('..').ResponseType<T>>, put: <T = any, K = object>(url: string, data: K, options?: import('..').APIOptions) => Promise<import('..').ResponseType<T>>, patch: <T = any, K = object>(url: string, data: K, options?: import('..').APIOptions) => Promise<import('..').ResponseType<T>>, get: <T = any>(url: string, options?: import('..').APIOptions) => Promise<import('..').ResponseType<T>>, trash: <T = any, K = object>(url: string, data?: K, options?: import('..').APIOptions) => Promise<import('..').ResponseType<T>>, setGlobalAPITimeout: (timeout: number) => void;
export { default as CoreAPI } from './CoreAPI';
export { QueryClientProvider } from './QueryClientProvider';
export * from './reactQueryHooks';
export { abortPreviousRequests, getIsRequestAborted, handleRedirectToLicenseActivation } from './utils';
