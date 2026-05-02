import { ApiQueuingWithBatchResponseItem } from '../types';
/**
 * Executes a batch of function calls concurrently with queuing.
 * @param functionCalls The array of function calls returning promise to be executed.
 * @param batchSize The maximum number of function calls to be executed concurrently. Defaults to the value of `window._env_.API_BATCH_SIZE`.
 * @param shouldRejectOnError If set to true, the promise will reject if any of the function calls rejects, i.e, acts like Promise.all else Promise.allSettled . Defaults to false.
 * @returns A promise that resolves to a array of objects containing the status and value of the batch execution.
 */
declare const ApiQueuingWithBatch: <T>(functionCalls: any, shouldRejectOnError?: boolean, batchSize?: number) => Promise<ApiQueuingWithBatchResponseItem<T>[]>;
export default ApiQueuingWithBatch;
