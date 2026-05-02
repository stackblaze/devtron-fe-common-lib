export declare const COLOR_MAPPING: {
    Completed: string;
    Pending: string;
    Failed: string;
};
export declare const RESULTS_MODAL_HEADERS: {
    label: string;
    isSortable: boolean;
    width: string;
}[];
export declare const SORT_ORDER_TO_KEY: Partial<Record<(typeof RESULTS_MODAL_HEADERS)[number]['label'], string>>;
export declare const SORT_KEY_TO_NORMALIZER: Partial<Record<(typeof RESULTS_MODAL_HEADERS)[number]['label'], Function | null>>;
export type SORTABLE_KEYS_TYPE = (typeof SORT_ORDER_TO_KEY)[keyof typeof SORT_ORDER_TO_KEY];
