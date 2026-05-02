import { ComponentProps, SyntheticEvent } from 'react';
import { default as Tippy } from '@tippyjs/react';
import { RegistryType } from '../../types';
type ImageChipCellButtonActionProps = {
    handleClick: (e: SyntheticEvent) => void;
    isExpanded: boolean;
} | {
    handleClick?: never;
    isExpanded?: never;
};
export type ImageChipCellProps = {
    imagePath: string;
    registryType?: RegistryType;
    placement?: ComponentProps<typeof Tippy>['placement'];
} & ImageChipCellButtonActionProps;
export {};
