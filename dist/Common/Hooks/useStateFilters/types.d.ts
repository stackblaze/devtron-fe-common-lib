import { UseUrlFiltersProps, UseUrlFiltersReturnType } from '../useUrlFilters';
export interface UseStateFiltersProps<T> extends Pick<UseUrlFiltersProps<T, never>, 'initialSortKey' | 'defaultPageSize'> {
}
export interface UseStateFiltersReturnType<T> extends Pick<UseUrlFiltersReturnType<T>, 'sortBy' | 'sortOrder' | 'handleSorting' | 'clearFilters' | 'changePage' | 'changePageSize' | 'offset' | 'pageSize' | 'searchKey' | 'handleSearch' | 'areFiltersApplied'> {
}
export interface PaginationType<T> extends Pick<UseUrlFiltersReturnType<T>, 'pageSize'> {
    pageNumber: number;
}
