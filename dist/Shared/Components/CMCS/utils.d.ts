import { GroupBase, OptionsOrGroups } from 'react-select';
import { CMSecretPayloadType, ConfigMapSecretUseFormProps, ESOSecretData, GetConfigMapSecretFormInitialValuesParamsType } from '../../Services';
import { KeyValueTableData } from '../KeyValueTable';
import { ConfigMapSecretDataTypeOptionType, GetConfigMapSecretReadOnlyValuesParamsType } from './types';
export declare const getSecretDataTypeOptions: (isJob: boolean, isHashiOrAWS: boolean) => ConfigMapSecretDataTypeOptionType[] | OptionsOrGroups<ConfigMapSecretDataTypeOptionType, GroupBase<ConfigMapSecretDataTypeOptionType>>;
export declare const convertKeyValuePairToYAML: (currentData: KeyValueTableData[]) => string;
export declare const getConfigMapSecretFormInitialValues: ({ isJob, configMapSecretData, cmSecretStateLabel, componentType, skipValidation, fallbackMergeStrategy, }: GetConfigMapSecretFormInitialValuesParamsType) => ConfigMapSecretUseFormProps;
export declare const getConfigMapSecretReadOnlyValues: ({ configMapSecretData, cmSecretStateLabel, componentType, isJob, fallbackMergeStrategy, displayKeys, }: GetConfigMapSecretReadOnlyValuesParamsType) => {
    configData: {
        displayName: string;
        value: any;
        key: string;
    }[];
    data: string;
};
export declare const convertYAMLToKeyValuePair: (yaml: string) => KeyValueTableData[];
export declare const getESOSecretDataFromYAML: (yaml: string) => ESOSecretData;
export declare const getConfigMapSecretPayload: ({ isSecret, external, externalType, externalSubpathValues, yaml, yamlMode, currentData, esoSecretYaml, filePermission, name, selectedType, isFilePermissionChecked, roleARN, volumeMountPath, isSubPathChecked, mergeStrategy, }: ConfigMapSecretUseFormProps) => CMSecretPayloadType;
