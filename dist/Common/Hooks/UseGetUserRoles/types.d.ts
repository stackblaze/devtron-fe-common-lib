export interface UseGetUserRolesType {
    isSuperAdmin: boolean;
    /**
     * User can give access to all other users
     */
    canManageAllAccess?: boolean;
    hasManagerPermissions: boolean;
}
