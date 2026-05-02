export interface SelectComposition {
    Button?: React.FC<any>;
    OptGroup?: React.FC<any>;
    Option?: React.FC<any>;
    Search?: React.FC<any>;
    All?: React.FC<any>;
    Async?: React.FC<any>;
}
export interface OptionGroupProps {
    label: string;
    rootClassName?: string;
}
export interface SelectProps {
    children: any;
    onChange: (...args: any[]) => void;
    valueComparator?: (...args: any[]) => boolean;
    value?: any;
    rootClassName?: string;
    disabled?: boolean;
    tabIndex?: number;
    name?: string;
    autoWidth?: boolean;
    isKebab?: boolean;
    dataTestId?: string;
}
export interface SelectAsync {
    api: (...args: any[]) => Promise<any>;
}
