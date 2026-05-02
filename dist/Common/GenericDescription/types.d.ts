import { JSX } from 'react';
export interface GenericDescriptionProps {
    text?: string;
    updatedBy?: string;
    updatedOn?: string;
    updateDescription: (string: any) => Promise<void>;
    title: string;
    emptyStateConfig?: {
        img: string;
        subtitle: JSX.Element;
    };
}
