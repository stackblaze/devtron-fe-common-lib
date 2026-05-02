import { IconName, IconsProps } from '../Icon';
export declare const getIconName: (status: string, showAnimatedIcon: boolean) => IconName;
export declare const getIconColor: (status: string) => IconsProps["color"];
export declare const getDeploymentStatusFromStatus: (status: string) => string;
export declare const getJobStatusFromStatus: (status: string) => string;
