import { UseGetUserRolesType } from './types';
/**
 * @description It will return isSuperAdmin and would be set to false by default, might need few optimizations like dep, etc
 * @returns {UseGetUserRolesType} isSuperAdmin, canManageAllAccess
 */
declare const useGetUserRoles: () => UseGetUserRolesType;
export default useGetUserRoles;
