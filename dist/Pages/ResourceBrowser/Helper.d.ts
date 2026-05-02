import { AggregationKeys, NodeType } from '../../Shared';
import { ApiResourceGroupType, CreateResourceRequestBodyParamsType, CreateResourceRequestBodyType } from './ResourceBrowser.Types';
export declare function getAggregator(nodeType: NodeType, defaultAsOtherResources?: boolean): AggregationKeys;
export declare const getK8sResourceListPayload: (clusterId: string, namespace: string, selectedResource: ApiResourceGroupType, filters: object) => {
    clusterId: number;
    k8sRequest: {
        resourceIdentifier: {
            namespace: string;
            groupVersionKind: import('./ResourceBrowser.Types').GVKType;
        };
    };
};
export declare const createResourceRequestBody: ({ clusterId, group, version, kind, name, namespace, updatedManifest, }: CreateResourceRequestBodyParamsType) => CreateResourceRequestBodyType;
