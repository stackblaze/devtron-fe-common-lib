import { DeploymentAppTypes } from '../../../Common/Types';
import { DeploymentStatusDetailsBreakdownDataType, DeploymentStatusDetailsType } from '../../types';
/**
 * @description
 * This function processes the deployment status details data and returns a breakdown of the deployment status.
 * Cases it handles:
 * 1. If timelines are not present, say the case of helm deployment, we will parse the wfrStatus and put the status and basic deployment info [triggeredBy, deploymentStartedOn, deploymentFinishedOn] into the breakdown data and return it.
 * 2. In case of argo_cd:
 *  - There are five timelines in chronological order:
 *    - Deployment Initiated
 *    - Git commit
 *    - ArgoCD Sync
 *    - Kubectl Apply
 *    - App Health
 *    In case of flux_cd
 *    - Deployment Initiated
 *    - Git commit
 *    - App Health
 *  - Basic flow is we traverse the timelines in order, if find the last status for that specific timeline from response by traversing the timelines in reverse order.
 *  - If element is found, we will parse the status and set the icon, display text, time, etc. for that timeline and set the next timeline to inprogress.
 *  - If element is not found, we will parse on basis of factors like:
 *   - If this timeline is not inprogress and deploymentStatus is progressing, we will set the current timeline to waiting.
 *   - In similar fashion based on the deploymentStatus we will set the icon and display text for the timeline.
 */
export declare const processDeploymentStatusDetailsData: (deploymentAppType: DeploymentAppTypes, data?: DeploymentStatusDetailsType) => DeploymentStatusDetailsBreakdownDataType;
