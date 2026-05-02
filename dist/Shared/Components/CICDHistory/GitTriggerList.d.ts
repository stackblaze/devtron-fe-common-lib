import { JSX } from 'react';
import { DeploymentSummaryTooltipCardType } from './types';
declare const GitTriggerList: import('react').MemoExoticComponent<({ ciMaterials, gitTriggers, addMarginTop, }: Pick<DeploymentSummaryTooltipCardType, "ciMaterials" | "gitTriggers"> & {
    addMarginTop?: boolean;
}) => JSX.Element>;
export default GitTriggerList;
