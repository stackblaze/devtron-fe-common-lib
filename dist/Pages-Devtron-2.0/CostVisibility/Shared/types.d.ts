import { JSX, ReactNode } from 'react';
import { RJSFFormSchema } from '../../../Common/RJSF';
import { ClusterDetailListType } from '../../../Common/Types';
export declare enum CostBreakdownViewType {
    CLUSTERS = "clusters",
    ENVIRONMENTS = "environments",
    PROJECTS = "projects",
    APPLICATIONS = "applications"
}
export declare enum CostBreakdownItemViewParamsType {
    ITEM_NAME = "itemName",
    VIEW = "view",
    DETAIL = "detail"
}
type RenderClusterFormParamsType = {
    clusterDetails: ClusterDetailListType;
    handleClose: () => void;
    handleSuccess: () => void;
};
export interface CostVisibilityRenderContextType {
    renderClusterForm: (params: RenderClusterFormParamsType) => JSX.Element;
}
export interface CostVisibilityRenderProviderProps extends CostVisibilityRenderContextType {
    children: ReactNode;
}
export type ClusterProviderType = 'AWS' | 'GCP' | 'Azure' | 'Alibaba' | 'Scaleway' | 'Oracle' | 'OTC' | 'DigitalOcean' | 'Unknown';
export interface ClusterProviderDetailsType {
    clusterProvider: ClusterProviderType;
    costModuleSchema: RJSFFormSchema;
}
export {};
