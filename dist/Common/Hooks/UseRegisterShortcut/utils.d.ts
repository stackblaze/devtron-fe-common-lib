import { ShortcutType } from './types';
export declare const preprocessKeys: (keys: ShortcutType["keys"]) => {
    keys: ("N" | "R" | "Enter" | "/" | "Alt" | "F" | "E" | "K" | "X" | "A" | "S" | "Home" | "End" | "." | "Space" | ">" | "Control" | "Shift" | "Meta" | "Escape" | "ArrowLeft" | "ArrowRight" | "ArrowUp" | "ArrowDown" | "PageUp" | "PageDown" | "Backspace" | "Delete")[];
    id: string;
};
export declare const verifyCallbackStack: (stack: ShortcutType["callbackStack"]) => void;
