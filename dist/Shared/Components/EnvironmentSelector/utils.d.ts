import { OptionType } from '../../../Common';
import { EnvListMinDTO, GroupedOptionsType } from '../../types';
import { SelectedEnvironmentsMapType } from './types';
export declare const parseEnvironmentClusterListToOptions: (environmentClusterList: EnvListMinDTO[]) => GroupedOptionsType[];
export declare const getSelectedOptions: <T>(selectedEnvironmentsMap: SelectedEnvironmentsMapType<T>, options: GroupedOptionsType[]) => OptionType[];
