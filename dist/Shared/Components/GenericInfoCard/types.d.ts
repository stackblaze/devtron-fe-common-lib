import { MouseEventHandler, ReactElement } from 'react';
import { LinkProps } from 'react-router-dom';
import { GenericFilterEmptyStateProps } from '../../../Common/EmptyState/types';
import { GenericEmptyStateType } from '../../../Common/Types';
import { APIResponseHandlerProps } from '../APIResponseHandler';
type BaseGenericInfoCardProps = {
    title: string;
    description: string;
    author: string;
    Icon: ReactElement;
} & ({
    onClick?: never;
    linkProps?: Pick<LinkProps, 'to' | 'target' | 'rel'>;
} | {
    onClick?: MouseEventHandler<HTMLDivElement>;
    linkProps?: never;
});
export declare enum GenericInfoCardBorderVariant {
    ROUNDED = "rounded",
    NONE = "none"
}
export type GenericInfoCardProps = {
    borderVariant: GenericInfoCardBorderVariant;
} & (({
    isLoading: true;
} & Partial<Record<keyof BaseGenericInfoCardProps, never>>) | ({
    isLoading?: boolean;
} & BaseGenericInfoCardProps));
export interface GenericInfoCardListingProps extends Pick<GenericInfoCardProps, 'borderVariant'>, Pick<GenericFilterEmptyStateProps, 'handleClearFilters'> {
    list: (Pick<GenericInfoCardProps, 'Icon' | 'author' | 'description' | 'linkProps' | 'onClick' | 'title'> & Record<'id', string>)[];
    emptyStateConfig: Pick<GenericEmptyStateType, 'title' | 'subTitle' | 'image' | 'renderButton' | 'renderButton'>;
    searchKey?: string;
    reloadList: () => void;
    error?: APIResponseHandlerProps['error'];
    isLoading?: boolean;
}
export interface GenericInfoListSkeletonProps extends Partial<Pick<GenericInfoCardProps, 'borderVariant'>> {
}
export {};
