import { ParentPluginDTO, PluginDataStoreType } from './types';
export declare const parsePluginDetailsDTOIntoPluginStore: (pluginData: ParentPluginDTO[]) => PluginDataStoreType;
/**
 * @description This method takes the initial plugin data store and updates the keys with the target parent plugin store and plugin version store
 */
export declare const getUpdatedPluginStore: (initialPluginDataStore: PluginDataStoreType, targetParentPluginStore: PluginDataStoreType["parentPluginStore"], targetPluginVersionStore: PluginDataStoreType["pluginVersionStore"]) => PluginDataStoreType;
