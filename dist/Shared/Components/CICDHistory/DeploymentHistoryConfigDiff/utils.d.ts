import { SelectPickerOptionType } from '../../SelectPicker';
import { DeploymentHistorySingleValue, History } from '../types';
import { DeploymentHistoryConfigDiffProps } from './types';
export declare const getPipelineDeployments: (triggerHistory: DeploymentHistoryConfigDiffProps["triggerHistory"]) => History[];
export declare const getPipelineDeploymentsWfrIds: ({ pipelineDeployments, wfrId, }: {
    pipelineDeployments: History[];
} & Pick<DeploymentHistoryConfigDiffProps, "wfrId">) => {
    currentWfrId: number;
    previousWfrId: number;
};
export declare const getPipelineDeploymentsOptions: ({ pipelineDeployments, wfrId, renderRunSource, resourceId, triggerHistory, }: Required<Pick<DeploymentHistoryConfigDiffProps, "renderRunSource" | "resourceId" | "triggerHistory">> & {
    pipelineDeployments: History[];
    wfrId: number;
}) => {
    currentDeployment: string;
    pipelineDeploymentsOptions: SelectPickerOptionType<number, import('react').ReactNode>[];
};
export declare const parseDeploymentHistoryDiffSearchParams: (compareWfrId: number) => (searchParams: URLSearchParams) => {
    compareWfrId: number;
};
export declare const isDeploymentHistoryConfigDiffNotFoundError: <T extends unknown>(res: PromiseSettledResult<T>) => boolean;
export declare const getDeploymentHistoryConfigDiffError: <T extends unknown>(res: PromiseSettledResult<T>) => any;
export declare const renderDetailedValue: (parentClassName: string, singleValue: DeploymentHistorySingleValue, dataTestId: string) => import("react/jsx-runtime").JSX.Element;
