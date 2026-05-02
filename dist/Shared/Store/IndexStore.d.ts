import { AppDetails, AppType, EnvDetails, iNode, Node, PodMetaData } from '../types';
export declare function getiNodesByRootNodeWithChildNodes(_nodes: Array<Node>, rootNodes: Array<iNode>, podMetadata?: Array<PodMetaData>): Array<iNode>;
export declare const reduceKindStatus: (aggregatedStatus: string, newStatus: string) => "healthy" | "progressing" | "degraded";
export declare function getiNodesByKindWithChildNodes(_nodes: Array<Node>, _kind: string): Array<iNode>;
export declare function getPodsRootParentNameAndStatus(_nodes: Array<Node>): Array<[string, string]>;
export declare const getPodsForRootNodeName: (_rootNode: string, _treeNodes: Array<Node>) => Array<iNode>;
export declare const IndexStore: {
    setEnvDetails: (envType: string, appId: number, envId: number) => void;
    getEnvDetails: () => EnvDetails;
    getEnvDetailsObservable: () => import('rxjs').Observable<EnvDetails>;
    publishAppDetails: (data: AppDetails, appType: AppType) => void;
    clearAppDetails(): void;
    getAppDetails: () => AppDetails;
    getAppDetailsObservable: () => import('rxjs').Observable<AppDetails>;
    getAppDetailsNodes: () => Node[];
    getAppDetailsNodesObservable: () => import('rxjs').Observable<Node[]>;
    getAppDetailsFilteredNodes: () => Node[];
    getAppDetailsNodesFilteredObservable: () => import('rxjs').Observable<Node[]>;
    getiNodesByKind: (_kind: string) => iNode[];
    getNodesByKind: (_kind: string) => Node[];
    getMetaDataForPod: (_name: string) => PodMetaData;
    getPodMetaData: () => PodMetaData[];
    getPodsForRootNode: (rootNode: string) => Array<iNode>;
    getAllPodNames: () => string[];
    getPodsRootParentNameAndStatus: () => Array<[string, string]>;
    getAllContainersForPod: (_name: string) => string[];
    getAllContainers: () => {
        containers: any[];
        pods: PodMetaData[];
    };
    getAllNewContainers: () => {
        containers: any[];
        pods: PodMetaData[];
    };
    getAllOldContainers: () => {
        containers: any[];
        pods: PodMetaData[];
    };
    getAllPods: () => PodMetaData[];
    getAllNewPods: () => PodMetaData[];
    getAllOldPods: () => PodMetaData[];
    getPodForAContainer: (_c: string) => any;
    updateFilterType: (filterType: string) => void;
    updateFilterSearch: (searchString: string) => void;
};
