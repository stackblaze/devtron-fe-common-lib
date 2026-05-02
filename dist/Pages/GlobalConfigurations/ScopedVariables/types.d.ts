export declare enum ScopedVariablesFileViewType {
    /**
     * Used to show yaml editor for editing/creating variables
     */
    YAML = "yaml",
    /**
     * Shows the variable list view
     */
    SAVED = "variables",
    /**
     * Shows the variables in environment list view
     */
    ENVIRONMENT_LIST = "environments"
}
export type SavedVariablesViewParamsType = {
    currentView: ScopedVariablesFileViewType;
};
