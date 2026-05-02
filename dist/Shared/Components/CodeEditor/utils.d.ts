import { MergeView } from '@codemirror/merge';
import { SearchQuery } from '@codemirror/search';
import { EditorView, Extension, Transaction } from '@uiw/react-codemirror';
import { CodeEditorProps, FindReplaceToggleButtonProps, GetCodeEditorHeightReturnType } from './types';
export declare const parseValueToCode: (value: string, mode: string, tabSize: number) => string;
export declare const getCodeEditorHeight: (height: CodeEditorProps["height"]) => GetCodeEditorHeightReturnType;
export declare const getFindReplaceToggleButtonIconClass: ({ iconType, isChecked, }: Pick<FindReplaceToggleButtonProps, "iconType" | "isChecked">) => "scb-5" | "scn-7" | "fcb-5" | "fcn-7";
export declare const getUpdatedSearchMatchesCount: (newQuery: SearchQuery, view: EditorView) => {
    count: number;
    current: number;
};
export declare const updateDiffMinimapValues: (view: MergeView, transactions: readonly Transaction[], side: "a" | "b") => void;
export declare const getScanLimit: (lhsValue: string, value: string) => 10000 | 500 | 5000 | 15000 | 20000;
export declare const getFoldGutterElement: (open: boolean) => HTMLSpanElement;
export declare const getReadOnlyElement: () => HTMLDivElement;
export declare const getRevertControlButton: () => HTMLButtonElement;
export declare const getLanguageExtension: (mode: CodeEditorProps["mode"], disableLint?: boolean) => Extension;
export declare const getValidationSchema: ({ mode, validatorSchema, schemaURI, }: Pick<CodeEditorProps, "schemaURI" | "validatorSchema" | "mode">) => Extension[];
