import { default as React } from 'react';
import { SecurityModalPropsType } from './types';
/**
 * NOTE: the security modal is split into 3 sections - ImageScan, CodeScan & Kubernetes Manifest;
 * Each category has 1 or more subCategories from the set (Vulnerability, License, MisConfigurations & ExposedSecrets)
 * Since each combination of category & subCategory results in the data being visualized through InfoCard & Table
 * the components are declared & called only once and only the data (props) passed to these components differ
 * between the different configurations of category & subCategory. Some row elements from some combinations
 * of Category & SubCategory can allow users to view that particular data in detail (taking user to detailView)
 * So to showcase the detail data, the data is set into detailViewData property of ModalState.
 * For further detail please refer the types to understand the Api Response and workflow of the modal component.
 * */
declare const SecurityModal: React.FC<SecurityModalPropsType>;
export default SecurityModal;
