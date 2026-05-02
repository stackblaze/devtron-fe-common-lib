import { USER_PREFERENCES_ATTRIBUTE_KEY } from './constants';
import { AppThemeType, ThemeConfigType, ThemePreferenceType } from '../../Providers/ThemeProvider/types';
import { ResourceKindType } from '../../types';
import { NavigationItemID, NavigationSubMenuItemID } from '../../../Pages-Devtron-2.0/Navigation';
export interface GetUserPreferencesQueryParamsType {
    key: typeof USER_PREFERENCES_ATTRIBUTE_KEY;
}
export declare enum ViewIsPipelineRBACConfiguredRadioTabs {
    ALL_ENVIRONMENTS = "All environments",
    ACCESS_ONLY = "Access only"
}
export declare enum UserPreferenceResourceActions {
    RECENTLY_VISITED = "recently-visited"
}
export type PreferredResourceKindType = ResourceKindType.devtronApplication | ResourceKindType.job | 'app-group' | ResourceKindType.cluster;
export interface BaseRecentlyVisitedEntitiesTypes {
    id: number;
    name: string;
}
export interface UserPreferenceRecentlyVisitedAppsTypes extends BaseRecentlyVisitedEntitiesTypes {
    resourceKind: PreferredResourceKindType;
}
export interface UserResourceKindActionType {
    [UserPreferenceResourceActions.RECENTLY_VISITED]: BaseRecentlyVisitedEntitiesTypes[];
}
export type UserPreferenceResourceType = Partial<Record<PreferredResourceKindType, UserResourceKindActionType>>;
export type CommandBarAdditionalItemsId = 'app-management-devtron-app-list' | 'app-management-helm-app-list' | 'app-management-flux-app-list' | 'app-management-argo-app-list' | `app-management-devtron-app-list-${number}` | 'search-app-list-view' | `chart-list-${number}` | 'search-chart-list-view' | `helm-app-list-${number}` | 'search-helm-app-list-view' | `cluster-list-${number}` | 'search-cluster-list-view';
export interface GetUserPreferencesParsedDTO {
    viewPermittedEnvOnly?: boolean;
    /**
     * Computed app theme for the user
     *
     * Could be 'light' | 'dark' | 'system-light' | 'system-dark'
     */
    computedAppTheme?: AppThemeType | `system-${AppThemeType}`;
    /**
     * @description resources object with key as resource kind and value as ResourceType
     *
     */
    resources?: UserPreferenceResourceType;
    commandBar: {
        recentNavigationActions: {
            id: NavigationItemID | NavigationSubMenuItemID | CommandBarAdditionalItemsId;
        }[];
    };
}
export interface UserPreferencesPayloadValueType extends GetUserPreferencesParsedDTO {
}
export interface UpdateUserPreferencesPayloadType extends Pick<GetUserPreferencesQueryParamsType, 'key'> {
    value: string;
}
export interface UserPreferencesType extends Pick<GetUserPreferencesParsedDTO, 'commandBar'> {
    /**
     * Preferred theme for the user
     * If null, would forcibly show user theme switcher dialog for user to select
     */
    themePreference?: ThemePreferenceType | null;
    /**
     * @type {ViewIsPipelineRBACConfiguredRadioTabs}
     * @description pipelineRBACViewSelectedTab is used to store the selected tab in the pipeline RBAC view
     * @default ViewIsPipelineRBACConfiguredRadioTabs.VIEW_PERMITTED_ENV
     */
    pipelineRBACViewSelectedTab?: ViewIsPipelineRBACConfiguredRadioTabs;
    /**
     * @description resources object
     */
    resources?: GetUserPreferencesParsedDTO['resources'];
    /**
     * @description version of the user preferences, to be used for migration purposes
     */
    version?: string;
}
export interface UpdatedUserPreferencesType extends UserPreferencesType, Pick<ThemeConfigType, 'appTheme'> {
}
export interface RecentlyVisitedFetchConfigType extends UserPreferenceRecentlyVisitedAppsTypes {
    isDataAvailable?: boolean;
}
export interface UseUserPreferencesProps {
    userPreferenceResourceKind?: PreferredResourceKindType;
    migrateUserPreferences?: (userPreferencesResponse: UserPreferencesType) => Promise<UserPreferencesType>;
    recentlyVisitedFetchConfig?: RecentlyVisitedFetchConfigType;
}
type UserPathValueMapType = {
    path: 'themePreference';
    value: Required<Pick<UpdatedUserPreferencesType, 'themePreference' | 'appTheme'>>;
    resourceKind?: never;
    userPreferencesResponse?: never;
} | {
    path: 'pipelineRBACViewSelectedTab';
    value: Required<Pick<UserPreferencesType, 'pipelineRBACViewSelectedTab'>>;
    resourceKind?: never;
    userPreferencesResponse?: never;
} | {
    path: 'resources';
    value: Required<BaseRecentlyVisitedEntitiesTypes[]>;
    resourceKind: PreferredResourceKindType;
    userPreferencesResponse?: UserPreferencesType;
} | {
    path: 'commandBar.recentNavigationActions';
    value: UserPreferencesType['commandBar']['recentNavigationActions'];
    resourceKind?: never;
    userPreferencesResponse?: never;
};
export type GetUserPreferencePayloadParams = {
    userPreferencesResponse: UserPreferencesType;
    resourceKind?: PreferredResourceKindType;
} & ({
    path: 'themePreference';
    value: Required<Pick<UpdatedUserPreferencesType, 'themePreference' | 'appTheme'>>;
} | {
    path: 'pipelineRBACViewSelectedTab';
    value: Required<Pick<UserPreferencesType, 'pipelineRBACViewSelectedTab'>>;
} | {
    path: 'resources';
    value: Required<BaseRecentlyVisitedEntitiesTypes[]>;
} | {
    path: 'commandBar.recentNavigationActions';
    value: UserPreferencesType['commandBar']['recentNavigationActions'];
});
export type UserPreferenceResourceProps = UserPathValueMapType & {
    shouldThrowError?: boolean;
    userPreferencesResponse?: UserPreferencesType;
};
export interface UserPreferenceFilteredListTypes extends UserPreferenceRecentlyVisitedAppsTypes {
    userPreferencesResponse?: UserPreferencesType;
}
export {};
