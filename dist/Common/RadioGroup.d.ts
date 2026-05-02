import { RadioGroupProps } from './Types';
export declare const RadioGroupContext: import('react').Context<{
    name: string;
    value: string;
    disabled: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}>;
declare const RadioGroup: ({ name, value, disabled, onChange, className, children }: RadioGroupProps) => import("react/jsx-runtime").JSX.Element;
export default RadioGroup;
