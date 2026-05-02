import { Command, EditorState, StateField } from '@uiw/react-codemirror';
export declare const setShowReplaceField: import('@codemirror/state').StateEffectType<boolean>;
export declare const showReplaceFieldState: StateField<boolean>;
export declare const getShowReplaceField: (state: EditorState) => boolean;
export declare const openSearchPanel: Command;
export declare const openSearchPanelWithReplace: Command;
export declare const replaceAll: Command;
