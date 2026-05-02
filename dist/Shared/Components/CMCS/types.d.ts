import { CM_SECRET_STATE, CMSecretComponentType, CMSecretConfigData } from '../../Services';
import { OverrideMergeStrategyType } from '../../../Pages/index';
import { SelectPickerOptionType } from '../SelectPicker';
export interface ConfigMapSecretReadyOnlyProps {
    configMapSecretData: CMSecretConfigData;
    componentType: CMSecretComponentType;
    cmSecretStateLabel: CM_SECRET_STATE;
    isJob: boolean;
    areScopeVariablesResolving: boolean;
    fallbackMergeStrategy: OverrideMergeStrategyType;
    hideCodeEditor?: boolean;
    containerClassName?: string;
    /**
     * @default false
     */
    displayKeys?: boolean;
    /**
     * @default false
     */
    isBorderLess?: boolean;
}
export interface GetConfigMapSecretReadOnlyValuesParamsType extends Pick<ConfigMapSecretReadyOnlyProps, 'componentType' | 'configMapSecretData' | 'cmSecretStateLabel' | 'isJob' | 'fallbackMergeStrategy' | 'displayKeys'> {
}
export type ConfigMapSecretDataTypeOptionType = SelectPickerOptionType<string>;
