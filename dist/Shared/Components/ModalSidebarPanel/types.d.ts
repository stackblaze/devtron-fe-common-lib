import { JSX, ReactNode } from 'react';
import { DocLinkProps } from '../DocLink';
export interface ModalSidebarPanelProps {
    rootClassName?: string;
    heading: string | null;
    icon?: JSX.Element;
    children?: ReactNode;
    documentationLink: DocLinkProps['docLinkKey'];
}
