import { AppThemeType, ThemeConfigType, ThemePreferenceType } from './types';
export declare const getAppThemeForAutoPreference: () => AppThemeType;
export declare const setThemePreferenceInLocalStorage: (themePreference: ThemePreferenceType) => void;
export declare const logThemeToAnalytics: ({ appTheme, themePreference }: ThemeConfigType) => void;
export declare const getThemeConfigFromLocalStorage: () => ThemeConfigType;
export declare const getComponentSpecificThemeClass: (appTheme: AppThemeType) => string;
export declare const getThemeOppositeThemeClass: (appTheme: AppThemeType) => "component-specific-theme__light" | "component-specific-theme__dark";
export declare const getThemePreferenceText: (themePreference: ThemePreferenceType) => string;
