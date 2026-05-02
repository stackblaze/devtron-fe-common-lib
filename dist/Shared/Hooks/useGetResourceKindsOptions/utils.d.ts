import { ResourceKindType } from '../../types';
import { UseGetResourceKindsOptionsProps } from './types';
export declare const getResourcesToFetchMap: (resourcesToFetch: UseGetResourceKindsOptionsProps["resourcesToFetch"]) => Record<ResourceKindType.devtronApplication | ResourceKindType.cluster | ResourceKindType.environment | ResourceKindType.project, boolean>;
