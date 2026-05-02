import { Diagnostic } from '@codemirror/lint';
import { EditorView } from '@uiw/react-codemirror';
export declare const yamlParseLinter: () => (view: EditorView) => Diagnostic[];
