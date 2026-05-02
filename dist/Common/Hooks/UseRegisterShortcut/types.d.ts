import { FocusEvent, KeyboardEvent } from 'react';
export declare const KEYBOARD_KEYS_MAP: {
    readonly Control: "Ctrl";
    readonly Shift: "⇧";
    readonly Meta: "⌘" | "Win";
    readonly Alt: "⌥" | "Alt";
    readonly F: "F";
    readonly E: "E";
    readonly R: "R";
    readonly K: "K";
    readonly X: "X";
    readonly A: "A";
    readonly N: "N";
    readonly S: "S";
    readonly '/': "/";
    readonly Escape: "Esc";
    readonly Enter: "↩";
    readonly ArrowLeft: "←";
    readonly ArrowRight: "→";
    readonly ArrowUp: "↑";
    readonly ArrowDown: "↓";
    readonly PageUp: "PgUp";
    readonly PageDown: "PgDn";
    readonly Home: "Home";
    readonly End: "End";
    readonly Backspace: "⌫";
    readonly Delete: "⌦";
    readonly '.': ".";
    readonly Space: "Space";
    readonly '>': ">";
};
export type SupportedKeyboardKeysType = keyof typeof KEYBOARD_KEYS_MAP;
export interface ShortcutType {
    keys: SupportedKeyboardKeysType[];
    callbackStack: Array<() => void>;
    description?: string;
}
interface RegisterShortcutType extends Pick<ShortcutType, 'keys' | 'description'> {
    callback: ShortcutType['callbackStack'][number];
}
export interface UseRegisterShortcutContextType {
    /**
     * This method registers a shortcut with its corresponding callback
     *
     * If keys is undefined or null this method will throw an error
     */
    registerShortcut: (props: RegisterShortcutType) => void;
    /**
     * This method unregisters the provided shortcut if found
     *
     * If keys is undefined or null this method will throw an error
     */
    unregisterShortcut: (keys: ShortcutType['keys']) => void;
    /**
     * Globally disable all shortcuts with this function
     */
    setDisableShortcuts: (shouldDisable: boolean) => void;
    /**
     * Programmatically trigger a shortcut if already registered
     */
    triggerShortcut: (keys: ShortcutType['keys']) => void;
    /**
     * If shouldHookOntoWindow is false, these props need to be hooked onto
     * the component that needs to listen to the shortcuts
     */
    targetProps?: {
        onKeyDown: (event: KeyboardEvent<HTMLElement>) => void;
        onKeyUp: (event: KeyboardEvent<HTMLElement>) => void;
        onBlur: (event: FocusEvent<HTMLElement>) => void;
    };
}
export interface UseRegisterShortcutProviderType {
    /**
     * If false, the shortcuts will not be registered to the window object
     * instead onKeyDown, onKeyUp and onBlur will be exposed as context methods
     * which need to be hooked onto the component that needs to listen to the shortcuts
     *
     * defaults to true
     */
    shouldHookOntoWindow?: boolean;
    children: React.ReactNode;
    /**
     * Defines how long after holding the keys down do we trigger the callback in milliseconds
     */
    shortcutTimeout?: number;
    /**
     * Defines which html tags to ignore as source of an event
     */
    ignoreTags?: string[];
    /**
     * If true, call preventDefault on the event
     */
    preventDefault?: boolean;
}
export {};
