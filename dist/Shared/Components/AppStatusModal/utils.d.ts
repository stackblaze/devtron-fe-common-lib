import { GenericEmptyStateType } from '../../../Common/Types';
import { AppDetails, DeploymentStatusDetailsBreakdownDataType, Node } from '../../types';
import { AppStatusModalProps, GetFilteredFlattenedNodesFromAppDetailsParamsType as GetFlattenedNodesFromAppDetailsParamsType } from './types';
export declare const getAppStatusMessageFromAppDetails: (appDetails: AppDetails) => string;
export declare const getFlattenedNodesFromAppDetails: ({ appDetails, filterHealthyNodes, }: GetFlattenedNodesFromAppDetailsParamsType) => Node[];
export declare const getResourceKey: (nodeDetails: Node) => string;
export declare const getShowDeploymentStatusModal: ({ type, appDetails, }: Pick<AppStatusModalProps, "type" | "appDetails">) => boolean;
export declare const getEmptyViewImageFromHelmDeploymentStatus: (status: DeploymentStatusDetailsBreakdownDataType["deploymentStatus"]) => GenericEmptyStateType["image"];
