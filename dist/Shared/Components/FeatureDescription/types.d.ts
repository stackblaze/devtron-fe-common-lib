import { default as React, ReactNode } from 'react';
import { ImageType } from '../../../Common';
import { Breadcrumb } from '../../../Common/BreadCrumb/Types';
import { DocLinkProps } from '../DocLink';
interface BaseFeatureDescriptionModalProps {
    renderDescriptionContent?: () => ReactNode;
    docLink?: DocLinkProps['docLinkKey'];
    imageVariant?: ImageType;
    SVGImage?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    imageStyles?: React.CSSProperties;
}
type FeatureDescriptionModalWithTabsConfig = {
    /**
     * If provided, tabs are shown and have higher precedence over normal modal
     */
    tabsConfig: ({
        /**
         * Unique id of the tab
         */
        id: string;
        /**
         * Title for the tab
         */
        title: string;
    } & BaseFeatureDescriptionModalProps)[];
} & {
    renderDescriptionContent?: never;
    docLink?: never;
    imageVariant?: never;
    SVGImage?: never;
    imageStyles?: never;
};
export type FeatureDescriptionModalProps = {
    title: React.ReactNode;
    closeModalText?: string;
    closeModal?: () => void;
} & ((BaseFeatureDescriptionModalProps & {
    tabsConfig?: never;
}) | FeatureDescriptionModalWithTabsConfig);
export type DescriptorProps = ((Omit<FeatureDescriptionModalProps, 'tabsConfig'> & {
    tabsConfig?: never;
}) | (Pick<FeatureDescriptionModalProps, 'title' | 'closeModalText' | 'closeModal'> & FeatureDescriptionModalWithTabsConfig)) & {
    additionalContainerClasses?: string;
    iconClassName?: string;
    children?: React.ReactNode;
    showInfoIconTippy?: boolean;
    docLinkText?: string;
    dataTestId?: string;
    additionalContent?: ReactNode;
    /**
     * If true, the info icon is displayed which when clicked shows the feature description modal
     *
     * @default false
     */
    showInfoIcon?: boolean;
} & ({
    breadCrumbs: Breadcrumb[];
    pathPattern: string;
} | {
    breadCrumbs?: never;
    pathPattern?: never;
});
export {};
