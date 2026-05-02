import { KeyValueTableData } from '../KeyValueTable';
import { ConfigMapSecretDataTypeOptionType } from './types';
export declare const CONFIG_MAP_SECRET_YAML_PARSE_ERROR = "Please provide valid YAML";
export declare const SECRET_TOAST_INFO: {
    BOTH_STORE_AVAILABLE: string;
    CHECK_KEY_SECRET_KEY: string;
    BOTH_STORE_UNAVAILABLE: string;
    CHECK_KEY_NAME: string;
    BOTH_ESO_DATA_AND_DATA_FROM_AVAILABLE: string;
    BOTH_ESO_DATA_AND_DATA_FROM_UNAVAILABLE: string;
};
export declare const configMapDataTypeOptions: ConfigMapSecretDataTypeOptionType[];
export declare const CONFIG_MAP_SECRET_DEFAULT_CURRENT_DATA: KeyValueTableData[];
export declare const configMapSecretMountDataMap: {
    environment: {
        title: string;
        value: string;
    };
    volume: {
        title: string;
        value: string;
    };
};
