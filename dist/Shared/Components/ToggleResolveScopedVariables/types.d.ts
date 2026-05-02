export interface ToggleResolveScopedVariablesProps {
    name: string;
    resolveScopedVariables: boolean;
    handleToggleScopedVariablesView: () => void;
    isDisabled?: boolean;
    /**
     * @default true
     */
    showTooltip?: boolean;
}
