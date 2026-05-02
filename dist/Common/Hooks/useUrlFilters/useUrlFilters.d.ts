import { UseUrlFiltersProps, UseUrlFiltersReturnType } from './types';
/**
 * Generic hook for implementing URL based filters.
 * eg: pagination, search, sort.
 *
 * The exposed handlers can be consumed directly without the need for explicit state management
 *
 * @example Default Usage:
 * ```tsx
 * const { pageSize, changePage, ...rest } = useUrlFilters()
 * ```
 *
 * @example Usage with custom type for sort keys and initial sort key:
 * ```tsx
 * const  { sortBy, sortOrder } = useUrlFilters<'email' | 'name'>({ initialSortKey: 'email' })
 * ```
 *
 */
declare const useUrlFilters: <T = string, K = {}>({ initialSortKey, parseSearchParams, localStorageKey, redirectionMethod, defaultPageSize, }?: UseUrlFiltersProps<T, K>) => UseUrlFiltersReturnType<T, K>;
export default useUrlFilters;
