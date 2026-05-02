import { TreeViewProps } from '../../../TreeView';
import { GetSidebarDataParamsType } from '../../types';
import { SidebarDataChildType } from '../types';
export declare const getSecurityModalSidebarId: ({ category, subCategory }: SidebarDataChildType["value"]) => string;
export declare const getSecurityModalSidebarChildFromId: (id: string) => SidebarDataChildType["value"];
export declare const getSidebarData: ({ imageScan, codeScan, kubernetesManifest, imageScanLicenseRisks, selectedId, scanResult, }: GetSidebarDataParamsType) => TreeViewProps["nodes"];
