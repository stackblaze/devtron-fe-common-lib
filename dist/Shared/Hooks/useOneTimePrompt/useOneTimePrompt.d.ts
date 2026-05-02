import { UseOneTimePromptProps } from './types';
export declare const useOneTimePrompt: ({ localStorageKey }: UseOneTimePromptProps) => {
    showPrompt: boolean;
    handleClose: () => void;
    handleDoNotShowAgainClose: () => void;
};
