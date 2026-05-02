import { ResponseType } from '../../../Common';
import { GetParentPluginListPayloadType, GetPluginStoreDataReturnType, GetPluginStoreDataServiceParamsType, MinParentPluginDTO, PluginDetailServiceParamsType } from './types';
export declare const getPluginsDetail: ({ appId, parentPluginIds, pluginIds, signal, shouldShowError, parentPluginIdentifiers, }: PluginDetailServiceParamsType) => Promise<Pick<GetPluginStoreDataReturnType, "pluginStore">>;
export declare const getPluginStoreData: ({ searchKey, selectedTags, appId, offset, signal, }: GetPluginStoreDataServiceParamsType) => Promise<GetPluginStoreDataReturnType>;
export declare const getAvailablePluginTags: (appId: number) => Promise<string[]>;
export declare const getParentPluginList: (params?: Partial<GetParentPluginListPayloadType>) => Promise<ResponseType<MinParentPluginDTO[]>>;
