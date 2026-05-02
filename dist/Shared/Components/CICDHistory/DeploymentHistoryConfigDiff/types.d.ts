import { Dispatch, SetStateAction } from 'react';
import { UseUrlFiltersReturnType } from '../../../../Common/Hooks';
import { DeploymentConfigDiffProps } from '../../DeploymentConfigDiff';
import { EnvResourceType } from '../../../Services';
import { History, HistoryLogsProps } from '../types';
export interface DeploymentHistoryConfigDiffQueryParams {
    compareWfrId: number;
}
export interface DeploymentHistoryConfigDiffProps extends Required<Pick<HistoryLogsProps, 'renderRunSource' | 'resourceId' | 'pathPattern'>> {
    appName: string;
    envName: string;
    pipelineId: number;
    wfrId: number;
    triggerHistory: Map<number, History>;
    setFullScreenView: (fullscreen: boolean) => void;
}
export type DeploymentHistoryDiffDetailedProps = Pick<DeploymentConfigDiffProps, 'collapsibleNavList' | 'configList' | 'errorConfig' | 'isLoading' | 'navList' | 'hideDiffState'> & Required<Pick<DeploymentHistoryConfigDiffProps, 'setFullScreenView' | 'wfrId' | 'envName' | 'renderRunSource' | 'resourceId' | 'triggerHistory' | 'pathPattern'>> & {
    pipelineDeployments: History[];
    convertVariables: boolean;
    setConvertVariables: Dispatch<SetStateAction<boolean>>;
    isCompareDeploymentConfigNotAvailable?: boolean;
    urlFilters: UseUrlFiltersReturnType<string, DeploymentHistoryConfigDiffQueryParams>;
};
export type DeploymentHistoryConfigDiffRouteParams = {
    appId: string;
    envId: string;
    resourceType: EnvResourceType;
    resourceName: string;
};
export type DeploymentHistoryParamsType = {
    appId: string;
    pipelineId?: string;
    historyComponent?: string;
    baseConfigurationId?: string;
    historyComponentName?: string;
    envId?: string;
    triggerId?: string;
};
