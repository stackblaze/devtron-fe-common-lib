import { GetUserPreferencesParsedDTO, UserPreferenceFilteredListTypes, UserPreferencesType } from './types';
export declare const getFilteredUniqueAppList: ({ userPreferencesResponse, id, name, resourceKind, }: UserPreferenceFilteredListTypes) => import('./types').BaseRecentlyVisitedEntitiesTypes[];
export declare const getParsedResourcesMap: (resources: GetUserPreferencesParsedDTO["resources"]) => UserPreferencesType["resources"];
