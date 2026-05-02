import { DetailedHTMLProps, MutableRefObject, TextareaHTMLAttributes } from 'react';
import { KEY_VALUE } from '../Constants';
import { OptionType } from '../Types';
export interface SuggestedTagOptionType extends OptionType {
    description: string;
    propagate: boolean;
}
export declare enum DeploymentPolicy {
    ALLOW = "allow",
    BLOCK = "block",
    BLOCK_PROD = "block-prod",
    BLOCK_NON_PROD = "block-non-prod"
}
export interface VariableValueConstraintTypes {
    choices?: string[];
    blockCustomValue?: boolean;
}
export interface TagType {
    id?: number;
    key: string;
    value?: string;
    description?: string;
    propagate: boolean;
    mandatoryProjectIdsCsv?: string;
    isInvalidKey?: boolean;
    isInvalidValue?: boolean;
    isSuggested?: boolean;
    isPropagateDisabled?: boolean;
    deploymentPolicy?: DeploymentPolicy;
    valueConstraint?: VariableValueConstraintTypes;
}
export interface TagDetailType {
    index: number;
    tagData: TagType;
    setTagData: (index: number, tagData: TagType) => void;
    removeTag?: (index: number) => void;
    tabIndex?: number;
    suggestedTagsOptions?: SuggestedTagOptionType[];
    hidePropagateTag?: boolean;
}
export interface TagLabelValueSelectorType {
    selectedTagIndex: number;
    tagData: TagType;
    setTagData: (index: number, tagData: TagType) => void;
    tagOptions?: SuggestedTagOptionType[];
    isRequired?: boolean;
    tagInputType?: KEY_VALUE;
    placeholder?: string;
    tabIndex?: number;
    refVar?: MutableRefObject<HTMLTextAreaElement>;
    dependentRef?: MutableRefObject<HTMLTextAreaElement>;
    noBackDrop?: boolean;
}
export interface ResizableTagTextAreaProps extends Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'value'> {
    minHeight?: number;
    maxHeight?: number;
    value: string;
    refVar?: MutableRefObject<HTMLTextAreaElement>;
    dependentRef?: MutableRefObject<HTMLTextAreaElement>;
    dependentRefs?: Record<string | number, MutableRefObject<HTMLTextAreaElement>>;
    disableOnBlurResizeToMinHeight?: boolean;
}
