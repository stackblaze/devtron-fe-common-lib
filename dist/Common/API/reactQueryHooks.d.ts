import { QueryKey, UseInfiniteQueryOptions, UseInfiniteQueryResult, UseMutationOptions, UseMutationResult, useQueryClient, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { ServerErrors } from '../ServerError';
import { ResponseType } from '../Types';
export declare const useQuery: <TQueryFnData = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = readonly unknown[], WrapWithResponseType extends boolean = true>(options: UseQueryOptions<WrapWithResponseType extends true ? ResponseType<TQueryFnData> : TQueryFnData, ServerErrors, TData, TQueryKey>) => UseQueryResult<TData, ServerErrors>;
export declare const useMutation: <TData = unknown, TVariables = void, TContext = unknown>(options: UseMutationOptions<TData, ServerErrors, TVariables, TContext>) => UseMutationResult<TData, ServerErrors, TVariables, TContext>;
export declare const useInfiniteQuery: <TQueryFnData = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = readonly unknown[], WrapWithResponseType extends boolean = true>(options: UseInfiniteQueryOptions<WrapWithResponseType extends true ? ResponseType<TQueryFnData> : TQueryFnData, ServerErrors, TData, TQueryKey>) => UseInfiniteQueryResult<TData, ServerErrors>;
export { useQueryClient };
