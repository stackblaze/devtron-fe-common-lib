import { UsePromptProps } from './types';
/**
 * Hook that shows a prompt when shouldPrompt is true and the user tries to leave the page through refresh
 */
declare const usePrompt: ({ shouldPrompt, message }: UsePromptProps) => void;
export default usePrompt;
