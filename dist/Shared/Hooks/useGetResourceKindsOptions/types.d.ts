import { getAppOptionsGroupedByProjects } from '../../../Common/Common.service';
import { ServerErrors } from '../../../Common/ServerError';
import { EnvironmentsGroupedByClustersType } from '../../../Common/Types';
import { getClusterOptions } from '../../index';
import { ResourceKindType } from '../../types';
import { getProjectOptions } from './service';
export interface UseGetResourceKindsOptionsProps {
    resourcesToFetch: Extract<ResourceKindType, ResourceKindType.devtronApplication | ResourceKindType.project | ResourceKindType.cluster | ResourceKindType.environment>[];
}
export interface UseGetResourceKindOptionsReturnType {
    isResourcesOptionsLoading: boolean;
    resourcesOptionsMap: {
        [ResourceKindType.devtronApplication]: Awaited<ReturnType<typeof getAppOptionsGroupedByProjects>>;
        [ResourceKindType.project]: Awaited<ReturnType<typeof getProjectOptions>>;
        [ResourceKindType.cluster]: Awaited<ReturnType<typeof getClusterOptions>>;
        [ResourceKindType.environment]: EnvironmentsGroupedByClustersType;
    };
    resourcesOptionsError: ServerErrors;
    refetchResourcesOptions: () => void;
}
