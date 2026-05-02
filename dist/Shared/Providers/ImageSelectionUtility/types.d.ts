export interface ImageSelectionUtilityContextType {
    getModuleInfo: (moduleName: string) => Promise<any>;
}
export interface ImageSelectionUtilityProviderProps {
    children: React.ReactNode;
    value: ImageSelectionUtilityContextType;
}
