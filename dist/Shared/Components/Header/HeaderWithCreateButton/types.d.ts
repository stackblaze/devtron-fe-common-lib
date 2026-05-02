import { ActionMenuProps } from '../../ActionMenu';
export interface HeaderWithCreateButtonProps {
    viewType?: 'jobs' | 'apps' | 'infra-apps';
}
export declare enum CreateActionMenuItems {
    CUSTOM_APP = "create-custom-app",
    CHART_STORE = "create-from-chart-store",
    JOB = "create-job"
}
export type CreateActionMenuProps = ActionMenuProps<CreateActionMenuItems>;
