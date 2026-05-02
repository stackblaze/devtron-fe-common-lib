import { EditorView, Panel } from '@uiw/react-codemirror';
import { CodeEditorProps } from '../types';
export declare const getCodeEditorFindReplace: (onSearchBarAction: CodeEditorProps["onSearchBarAction"]) => (view: EditorView) => Panel;
