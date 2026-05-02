import { PreferredResourceKindType, UserPreferenceResourceProps, UserPreferencesType } from './types';
/**
 * @returns UserPreferencesType
 * @description This function fetches the user preferences from the server. It uses the `get` method to make a request to the server and retrieves the user preferences based on the `USER_PREFERENCES_ATTRIBUTE_KEY`. The result is parsed and returned as a `UserPreferencesType` object.
 * @throws Will throw an error if the request fails or if the result is not in the expected format.
 */
export declare const getUserPreferences: (signal?: AbortSignal) => Promise<UserPreferencesType>;
export declare const updateUserPreferences: ({ path, value, resourceKind, shouldThrowError, userPreferencesResponse, }: UserPreferenceResourceProps) => Promise<boolean>;
/**
 * Centralized function to update and persist user preferences
 * Handles both local state and server updates automatically
 * Eliminates the need for manual resource management in multiple places
 */
export declare const updateAndPersistUserPreferences: ({ id, name, resourceKind, shouldThrowError, updateLocalStorage, }: {
    id?: number;
    name?: string;
    resourceKind?: PreferredResourceKindType;
    shouldThrowError?: boolean;
    updateLocalStorage?: boolean;
}) => Promise<UserPreferencesType>;
