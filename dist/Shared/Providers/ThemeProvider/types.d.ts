import { ReactNode } from 'react';
export declare enum AppThemeType {
    light = "light",
    dark = "dark"
}
export declare const THEME_PREFERENCE_MAP: {
    readonly auto: "auto";
    readonly light: AppThemeType.light;
    readonly dark: AppThemeType.dark;
};
export type ThemePreferenceType = (typeof THEME_PREFERENCE_MAP)[keyof typeof THEME_PREFERENCE_MAP];
export interface ThemeConfigType {
    /**
     * Current application theme
     *
     * @default AppThemeType.light
     */
    appTheme: AppThemeType;
    /**
     * Preferred theme for the user (if any)
     *
     * @default THEME_PREFERENCE_MAP.auto
     *
     * Note: This shouldn't be consumed other than in ThemeSwitcherDialog component
     */
    themePreference: ThemePreferenceType;
}
export interface ThemeContextType extends ThemeConfigType {
    showSwitchThemeLocationTippy: boolean;
    handleShowSwitchThemeLocationTippyChange: (isVisible: boolean) => void;
    showThemeSwitcherDialog: boolean;
    handleThemeSwitcherDialogVisibilityChange: (isVisible: boolean) => void;
    handleThemePreferenceChange: (updatedThemePreference: ThemePreferenceType, 
    /**
     * @description If update is local we won't update local storage and analytics
     * */
    isLocalUpdate?: boolean) => void;
}
export interface ThemeProviderProps {
    children: ReactNode;
}
