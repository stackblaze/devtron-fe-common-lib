import { IconsProps } from '../Icon';
import { TabGroupProps } from './TabGroup.types';
export declare const getClassNameBySizeMap: ({ hideTopPadding, }: Pick<TabGroupProps, "hideTopPadding">) => Record<TabGroupProps["size"], {
    tabClassName: string;
    iconClassName: string;
    badgeClassName: string;
}>;
export declare const TAB_ICON_SIZE_MAP: Record<TabGroupProps['size'], IconsProps['size']>;
export declare const tabGroupClassMap: Record<TabGroupProps['size'], string>;
