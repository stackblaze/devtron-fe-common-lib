import { ClusterEntitiesTypes, ClusterStatusAndType, StatusCountEnum } from './types';
/**
 *
 * @param filteredList
 * @returns healthyCount, unhealthyCount, connectionFailedCount, prodCount, virtualCount
 */
export declare const getStatusCount: (filteredList: ClusterStatusAndType[]) => StatusCountEnum;
/**
 *
 * @param filteredList
 * @returns statusEntities, deploymentEntities
 *
 */
export declare const getEntities: (filteredList: ClusterStatusAndType[]) => ClusterEntitiesTypes;
