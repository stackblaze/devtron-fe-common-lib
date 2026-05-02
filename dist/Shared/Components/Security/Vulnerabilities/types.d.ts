import { ImageCardAccordionProps } from '../../ImageCardAccordion/types';
import { MaterialSecurityInfoType } from '../../../types';
export interface VulnerabilitiesProps extends MaterialSecurityInfoType, Pick<ImageCardAccordionProps, 'SecurityModalSidebar'> {
    artifactId: number;
    applicationId: number;
    environmentId: number;
    setVulnerabilityCount: React.Dispatch<React.SetStateAction<number>>;
}
