import { ReactNode } from 'react';
import { CDMaterialType, ImageTaggingContainerType } from '../../../Common';
import { RegistryType } from '../..';
export interface ArtifactInfoProps {
    imagePath: string;
    registryName: string;
    registryType: RegistryType;
    image: string;
    deployedTime: string;
    deployedBy: string;
    isRollbackTrigger: boolean;
    excludedImagePathNode: ReactNode;
    approvalChecksNode?: ReactNode;
    approvalInfoTippy?: ReactNode;
}
export interface SequentialCDCardTitleProps extends Pick<CDMaterialType, 'targetPlatforms'> {
    isLatest: boolean;
    isRunningOnParentCD: boolean;
    artifactStatus: string;
    stageType: string;
    showLatestTag: boolean;
    isVirtualEnvironment: boolean;
    deployedOn?: string[];
    environmentName?: string;
    parentEnvironmentName?: string;
    additionalInfo?: ReactNode;
}
export interface ImageCardProps {
    testIdLocator: string;
    sequentialCDCardTitleProps: SequentialCDCardTitleProps;
    cta: ReactNode;
    artifactInfoProps: ArtifactInfoProps;
    imageTagContainerProps: ImageTaggingContainerType;
    /**
     * Meant for ImageCardAccordion
     */
    children?: ReactNode;
    rootClassName?: string;
    materialInfoRootClassName?: string;
}
