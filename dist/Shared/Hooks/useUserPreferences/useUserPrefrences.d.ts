import { ServerErrors } from '../../../Common/ServerError';
import { BaseRecentlyVisitedEntitiesTypes, UserPreferencesType, UseUserPreferencesProps, ViewIsPipelineRBACConfiguredRadioTabs } from './types';
export declare const useUserPreferences: ({ migrateUserPreferences, recentlyVisitedFetchConfig }: UseUserPreferencesProps) => {
    userPreferences: UserPreferencesType;
    userPreferencesError: ServerErrors;
    handleFetchUserPreferences: () => Promise<void>;
    handleUpdatePipelineRBACViewSelectedTab: (selectedTab: ViewIsPipelineRBACConfiguredRadioTabs) => void;
    handleUpdateUserThemePreference: (themePreference: UserPreferencesType["themePreference"]) => void;
    fetchRecentlyVisitedParsedEntities: () => Promise<UserPreferencesType>;
    recentlyVisitedResources: BaseRecentlyVisitedEntitiesTypes[];
    recentResourcesLoading: boolean;
};
