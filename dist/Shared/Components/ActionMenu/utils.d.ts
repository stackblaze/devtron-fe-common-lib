import { UseActionMenuProps } from './types';
export declare const getActionMenuFlatOptions: <T extends string | number>(options: UseActionMenuProps<T>["options"]) => {
    option: import('./types').ActionMenuItemType<T>;
    itemIndex: number;
    sectionIndex: number;
}[];
export declare const filterActionMenuOptions: <T extends string | number>(options: UseActionMenuProps<T>["options"], searchTerm: string) => import('./types').ActionMenuOptionType<T>[];
