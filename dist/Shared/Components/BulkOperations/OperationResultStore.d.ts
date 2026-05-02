import { OperationResultStoreType } from './types';
export declare class OperationResultStore implements OperationResultStoreType {
    #private;
    private size;
    private results;
    private map;
    private retryOperations;
    private retryOperationsSet;
    private barChartEntities;
    constructor(size: number);
    private updateStatus;
    addResult: OperationResultStoreType['addResult'];
    getResults: OperationResultStoreType['getResults'];
    getBarChartEntities: OperationResultStoreType['getBarChartEntities'];
    getResultsStatusCount: OperationResultStoreType['getResultsStatusCount'];
    getSize: OperationResultStoreType['getSize'];
    updateResultStatus: OperationResultStoreType['updateResultStatus'];
    getRetryOperations: OperationResultStoreType['getRetryOperations'];
    hasAnyOperationFailed: OperationResultStoreType['hasAnyOperationFailed'];
    getHasAnyOperationSucceeded: OperationResultStoreType['getHasAnyOperationSucceeded'];
}
