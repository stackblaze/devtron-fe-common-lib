import { TooltipProps } from '../../../Common/Tooltip';
export interface InvalidYAMLTippyWrapperProps {
    parsingError: string;
    restoreLastSavedYAML?: () => void;
    children: TooltipProps['children'];
}
export declare enum InvalidTippyTypeEnum {
    YAML = "yaml",
    JSON = "json"
}
export interface InvalidTippyProps extends Pick<InvalidYAMLTippyWrapperProps, 'parsingError' | 'restoreLastSavedYAML'> {
    type?: InvalidTippyTypeEnum;
}
