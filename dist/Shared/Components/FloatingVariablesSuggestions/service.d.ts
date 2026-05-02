import { FloatingVariablesSuggestionsProps, ScopedVariableType } from './types';
export declare const getScopedVariables: (appId: FloatingVariablesSuggestionsProps["appId"], envId: FloatingVariablesSuggestionsProps["envId"], clusterId: FloatingVariablesSuggestionsProps["clusterId"], { hideObjectVariables, isTemplateView, }: Pick<FloatingVariablesSuggestionsProps, "isTemplateView"> & {
    hideObjectVariables?: boolean;
}) => Promise<ScopedVariableType[]>;
