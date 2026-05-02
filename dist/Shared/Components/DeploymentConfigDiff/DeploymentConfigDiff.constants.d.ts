import { FunctionComponent, SVGProps } from 'react';
import { DeploymentConfigDiffState } from './DeploymentConfigDiff.types';
export declare const diffStateTextMap: Record<DeploymentConfigDiffState, string>;
export declare const diffStateIconMap: Record<DeploymentConfigDiffState, FunctionComponent<SVGProps<SVGSVGElement>>>;
export declare const diffStateTooltipTextMap: Record<DeploymentConfigDiffState, string>;
export declare const diffStateTextColorMap: Record<DeploymentConfigDiffState, `c${string}`>;
export declare const DEPLOYMENT_CONFIG_DIFF_SORT_KEY = "sort-config";
