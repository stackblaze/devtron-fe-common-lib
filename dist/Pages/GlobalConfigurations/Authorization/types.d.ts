import { BaseFilterQueryParams } from '../../../Shared';
import { UserListSortableKeys, UserStatus } from './constants';
export declare enum UserTypeToFetchType {
    includeDeleted = "includeDeleted",
    excludeDelete = "excludeDelete",
    onlyDeleted = "onlyDeleted"
}
export type UserListFilterParams = BaseFilterQueryParams<UserListSortableKeys> & {
    /**
     * Selected statuses (if any)
     */
    status: UserStatus[];
    typeToFetch?: UserTypeToFetchType;
};
export interface UserMinType {
    id: number;
    emailId: string;
}
export interface UserRoleGroup {
    /**
     * Id of the permission group
     */
    id: number;
    /**
     * Name of the permission group
     */
    name: string;
    /**
     * Associated description for the group
     *
     * @default '-'
     */
    description?: string;
    /**
     * Status of the role group
     */
    status: UserStatus;
    /**
     * Timeout for the role group
     */
    timeToLive: string;
}
export interface UserGroupDTO {
    /**
     * Unique display name of the user group
     */
    name: string;
    /**
     * Unique id of the user group
     *
     * Follows the validation for app name
     */
    identifier: string;
    /**
     * Associated description
     *
     * @default ''
     */
    description?: string;
    /**
     * Number of users assigned to the group
     *
     * @default 0
     */
    usersCount?: number;
    /**
     * User Email Ids of the users assigned to the group
     *
     * @default []
     */
    userEmails?: string[];
}
export interface UserGroupType extends Required<Pick<UserGroupDTO, 'description' | 'name' | 'usersCount' | 'identifier' | 'userEmails'>> {
    /**
     * Unique id of the user group
     *
     * Follows the validation for app name
     */
    userGroupId: string;
}
