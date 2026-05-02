import { CreatePageArrType, Page, PageSizeOption } from './types';
/**
 * Returns an array of pages numbers and whether they are selected, visible or not
 */
export declare const createPageArr: ({ size, pageSize, selectedPageNo }: CreatePageArrType) => Page[];
export declare const getDefaultPageValueOptions: (pageSizeOptions: PageSizeOption[]) => PageSizeOption[];
