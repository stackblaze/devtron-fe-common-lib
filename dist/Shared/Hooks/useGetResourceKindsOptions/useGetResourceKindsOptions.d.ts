import { UseGetResourceKindOptionsReturnType, UseGetResourceKindsOptionsProps } from './types';
/**
 * Generic hook to fetch the options list for the supported resource kinds.
 *
 * Note: no call would be made for empty resource kind list
 *
 * @example Usage
 * ```tsx
 * const data = useGetResourceKindsOptions({
 *      resourcesToFetch: [ResourceKindType.devtronApplication, ResourceKindType.environment]
 * })
 * ```
 */
declare const useGetResourceKindsOptions: ({ resourcesToFetch, }: UseGetResourceKindsOptionsProps) => UseGetResourceKindOptionsReturnType;
export default useGetResourceKindsOptions;
