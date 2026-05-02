import { AppEnvDeploymentConfigListParams, DeploymentConfigDiffProps } from '..';
import { ConfigMapSecretDataConfigDatumDTO, DeploymentTemplateDTO, TemplateListDTO } from '../../Services/app.types';
export declare const getDeploymentTemplateData: (data: DeploymentTemplateDTO) => any;
/**
 * Retrieves the draft data from the given configuration data object.
 *
 * @param configData - The configuration data object.
 * @returns The draft data if available, otherwise the original data.
 */
export declare const getDraftData: (configData: ConfigMapSecretDataConfigDatumDTO) => ConfigMapSecretDataConfigDatumDTO;
/**
 * Combines two arrays of configuration data objects based on a 'name' key.
 *
 * @param primaryArray - The first array of configuration data objects.
 * @param secondaryArray - The second array of configuration data objects.
 * @returns The combined array of configuration data objects.
 */
export declare const mergeConfigDataArraysByName: (primaryArray: ConfigMapSecretDataConfigDatumDTO[], secondaryArray: ConfigMapSecretDataConfigDatumDTO[]) => ConfigMapSecretDataConfigDatumDTO[][];
/**
 * Generates a list of deployment configurations for application environments and identifies changes between the current and compare lists.
 *
 * @param params - An object containing the following properties:
 * @param params.currentList - The current deployment configuration list.
 * @param params.compareList - The deployment configuration list to compare against.
 * @param params.getNavItemHref - A function to generate navigation item URLs based on the resource type and resource name.
 * @param params.isManifestView - A boolean that, when true, modifies the output for a manifest view.
 * @param params.sortOrder - (Optional) The order in which to sort the deployment templates.
 *
 * @returns An object containing the combined deployment configuration list, a collapsible navigation list, and a navigation list.
 */
export declare const getAppEnvDeploymentConfigList: <ManifestView extends boolean = false>({ currentList, compareList, getNavItemHref, isManifestView, convertVariables, compareToTemplateOptions, compareWithTemplateOptions, sortingConfig, }: AppEnvDeploymentConfigListParams<ManifestView>) => {
    configList: DeploymentConfigDiffProps["configList"];
    navList: DeploymentConfigDiffProps["navList"];
    collapsibleNavList: DeploymentConfigDiffProps["collapsibleNavList"];
};
export declare const getDefaultVersionAndPreviousDeploymentOptions: (data: TemplateListDTO[]) => {
    previousDeployments: TemplateListDTO[];
    defaultVersions: TemplateListDTO[];
};
