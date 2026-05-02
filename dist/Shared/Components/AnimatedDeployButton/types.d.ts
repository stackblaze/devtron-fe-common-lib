import { ButtonProps } from '../Button';
export interface AnimatedDeployButtonProps extends Pick<ButtonProps, 'dataTestId' | 'text' | 'disabled' | 'isLoading' | 'startIcon' | 'endIcon' | 'style'> {
    onButtonClick: (e?: any) => void;
    tooltipContent?: string;
    animateStartIcon?: boolean;
}
