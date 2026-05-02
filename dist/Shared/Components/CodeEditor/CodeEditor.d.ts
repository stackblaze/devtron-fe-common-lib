import { CodeEditorProps } from './types';
declare const CodeEditor: {
    <DiffView extends boolean = false>({ theme, value: propValue, originalValue, modifiedValue, isOriginalModifiable, mode, noParsing, children, tabSize, height, shebang, onChange, onOriginalValueChange, onModifiedValueChange, placeholder, diffView, loading, customLoader, validatorSchema, schemaURI, cleanData, onBlur, onFocus, autoFocus, onSearchPanelOpen, onSearchBarAction, collapseUnchangedDiffView, ...resProps }: CodeEditorProps<DiffView>): import("react/jsx-runtime").JSX.Element;
    Clipboard: () => import("react/jsx-runtime").JSX.Element;
    Header: ({ children, className, hideDefaultSplitHeader }: import('./types').CodeEditorHeaderProps) => import("react/jsx-runtime").JSX.Element;
    Warning: ({ className, text, children }: import('./types').CodeEditorStatusBarProps) => import("react/jsx-runtime").JSX.Element;
    ErrorBar: ({ className, text, children }: import('./types').CodeEditorStatusBarProps) => import("react/jsx-runtime").JSX.Element;
    Information: ({ className, children, text }: import('./types').CodeEditorStatusBarProps) => import("react/jsx-runtime").JSX.Element;
    Container: ({ children, flexExpand }: {
        children: import('react').ReactNode;
        flexExpand?: boolean;
    }) => import("react/jsx-runtime").JSX.Element;
};
export default CodeEditor;
