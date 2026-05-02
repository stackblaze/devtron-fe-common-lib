import { UserRoleGroup } from '../../../types';
import { UserRoleGroupsTableProps } from './types';
declare const UserRoleGroupTableRow: ({ id, name, description, status, timeToLive, modifierClassName, disableStatusComponent, handleStatusUpdate, handleDelete, statusComponent: StatusComponent, showStatus, showDelete, }: UserRoleGroup & Pick<UserRoleGroupsTableProps, "disableStatusComponent" | "handleStatusUpdate" | "handleDelete" | "statusComponent" | "showStatus"> & {
    modifierClassName: string;
    showDelete: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export default UserRoleGroupTableRow;
