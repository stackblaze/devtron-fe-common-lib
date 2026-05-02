import { ReactNode } from 'react';
export interface DeploymentEnvStateProps {
    envStateText: string;
    title: string;
    tooltipContent?: ReactNode;
}
export interface GetDeploymentEnvConfigType {
    Icon: ReactNode;
    stateClassName: string;
}
