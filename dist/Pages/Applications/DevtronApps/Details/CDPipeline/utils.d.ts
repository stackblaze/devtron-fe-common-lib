import { APIOptions, CDMaterialType } from '../../../../../Common/Types';
export declare const getAPIOptionsWithTriggerTimeout: (options?: APIOptions) => APIOptions;
/**
 * This check is used to find the image that is currently deployed on the environment
 * from the image list fetched from genericCDMaterialsService for a given environment
 *
 * @param material CDMaterialType
 * @returns if image is currently deployed
 */
export declare const isImageActiveOnEnvironment: (material: CDMaterialType) => boolean;
