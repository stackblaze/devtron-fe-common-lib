import { RefObject } from 'react';
import { FiltersTypeEnum, TableViewWrapperProps } from '../../Shared/Components';
import { Nodes, NodeType } from '../../Shared/types';
export interface GVKType {
    Group: string;
    Version: string;
    Kind: Nodes | NodeType;
}
export interface ApiResourceGroupType {
    gvk: GVKType;
    namespaced: boolean;
    isGrouped?: boolean;
    shortNames?: string[] | null;
}
export interface ApiResourceType {
    apiResources: ApiResourceGroupType[];
    allowedAll: boolean;
}
export interface K8SObjectBaseType {
    name: string;
}
interface K8sRequestResourceIdentifierType {
    groupVersionKind: GVKType;
    namespace?: string;
    name?: string;
}
interface ResourceListPayloadK8sRequestType {
    resourceIdentifier: K8sRequestResourceIdentifierType;
    patch?: string;
    forceDelete?: boolean;
}
export interface K8sResourceListPayloadType {
    clusterId: number;
    filter?: string;
    k8sRequest: ResourceListPayloadK8sRequestType;
}
export declare enum ResourceRecommenderHeaderType {
    NAME = "name",
    NAMESPACE = "namespace",
    KIND = "kind",
    API_VERSION = "apiVersion",
    CONTAINER_NAME = "containerName",
    CPU_REQUEST = "cpuRequest",
    CPU_LIMIT = "cpuLimit",
    MEMORY_REQUEST = "memoryRequest",
    MEMORY_LIMIT = "memoryLimit"
}
export type ResourceRecommenderHeaderWithStringValue = Extract<ResourceRecommenderHeaderType, ResourceRecommenderHeaderType.NAME | ResourceRecommenderHeaderType.NAMESPACE | ResourceRecommenderHeaderType.KIND | ResourceRecommenderHeaderType.API_VERSION | ResourceRecommenderHeaderType.CONTAINER_NAME>;
export type ResourceRecommenderHeaderWithRecommendation = Extract<ResourceRecommenderHeaderType, ResourceRecommenderHeaderType.CPU_REQUEST | ResourceRecommenderHeaderType.CPU_LIMIT | ResourceRecommenderHeaderType.MEMORY_REQUEST | ResourceRecommenderHeaderType.MEMORY_LIMIT>;
export type K8sResourceDetailDataType = {
    [key: string]: string | number | object | boolean;
    additionalMetadata?: Partial<Record<ResourceRecommenderHeaderWithRecommendation, {
        current: {
            value: string | 'none';
        } | null;
        recommended: {
            value: string | 'none';
        } | null;
        delta: number | null;
    }>>;
};
export interface K8sResourceDetailType {
    headers: string[];
    data: K8sResourceDetailDataType[];
}
export interface BulkSelectionActionWidgetProps {
    isResourceRecommendationView: boolean;
    count: number;
    handleOpenBulkDeleteModal: () => void;
    handleClearBulkSelection: () => void;
    handleOpenCordonNodeModal: () => void;
    handleOpenUncordonNodeModal: () => void;
    handleOpenDrainNodeModal: () => void;
    handleOpenRestartWorkloadModal: () => void;
    handleOpenApplyResourceRecommendationModal: () => void;
    parentRef: RefObject<HTMLDivElement>;
    showBulkRestartOption: boolean;
    showNodeListingOptions: boolean;
}
export type RBBulkOperationType = 'restart' | 'delete' | 'cordon' | 'uncordon' | 'drain' | 'applyResourceRecommendation';
export interface CreateResourceRequestBodyType {
    appId: string;
    clusterId: number;
    k8sRequest: {
        resourceIdentifier: Required<K8sRequestResourceIdentifierType>;
        patch?: string;
    };
}
export interface ResourceManifestDTO {
    manifestResponse: {
        manifest: Record<string, unknown>;
        recommendedManifest?: Record<string, unknown>;
    };
    secretViewAccess: boolean;
}
export interface CreateResourceRequestBodyParamsType extends Pick<CreateResourceRequestBodyType, 'clusterId'>, Required<Pick<K8sRequestResourceIdentifierType, 'name' | 'namespace'>> {
    updatedManifest?: string;
    group: GVKType['Group'];
    version: GVKType['Version'];
    kind: GVKType['Kind'];
}
export interface CreateResourcePayload {
    clusterId: number;
    manifest: string;
}
export interface CreateResourceDTO {
    kind: string;
    name: string;
    isUpdate: boolean;
    error: string;
}
export interface ResourceListPayloadType {
    clusterId: number;
    k8sRequest: {
        resourceIdentifier: {
            groupVersionKind: GVKType;
            namespace?: string;
            name?: string;
        };
        patch?: string;
        forceDelete?: boolean;
    };
}
export interface ResourceType {
    kind: string;
    name: string;
    isUpdate: boolean;
    error: string;
}
export interface NodeActionRequest {
    clusterId?: number;
    name: string;
    version: string;
    kind: string;
}
export interface GVKOptionValueType {
    kind: string;
    apiVersion: string;
}
export interface ResourceRecommenderActionMenuProps extends Pick<TableViewWrapperProps<K8sResourceDetailDataType, FiltersTypeEnum.URL>, 'filteredRows'> {
    lastScannedOn: string;
}
export {};
