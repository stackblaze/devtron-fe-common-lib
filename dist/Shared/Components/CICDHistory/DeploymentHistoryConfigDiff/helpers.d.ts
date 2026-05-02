import { DeploymentConfigDiffProps } from '../../DeploymentConfigDiff';
import { History } from '../types';
import { DeploymentHistoryConfigDiffProps } from './types';
export declare const renderDeploymentHistoryConfig: (config: DeploymentConfigDiffProps["configList"], heading: string, pathname: string, hideDiffState: boolean) => import("react/jsx-runtime").JSX.Element;
export declare const renderPipelineDeploymentOptionDescription: ({ stage, triggeredBy, triggeredByEmail, artifact, renderRunSource, resourceId, runSource, }: Pick<History, "triggeredBy" | "triggeredByEmail" | "artifact" | "stage" | "runSource"> & Pick<DeploymentHistoryConfigDiffProps, "renderRunSource" | "resourceId">) => import("react/jsx-runtime").JSX.Element;
