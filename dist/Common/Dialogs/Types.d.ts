import { ReactNode } from 'react';
type WithOrWithoutDeleteConfirmationType = {
    showDeleteConfirmation: true;
    /**
     * If added, confirmation input is shown
     */
    deleteConfirmationText: string;
} | {
    showDeleteConfirmation?: never;
    /**
     * If added, confirmation input is shown
     */
    deleteConfirmationText?: never;
};
export type DeleteDialogProps = {
    title: string;
    description?: string;
    closeDelete: () => void;
    delete: () => any;
    deletePrefix?: string;
    deletePostfix?: string;
    apiCallInProgress?: boolean;
    dataTestId?: string;
    buttonPrimaryText?: string;
    shouldStopPropagation?: boolean;
    disabled?: boolean;
    children?: ReactNode;
} & WithOrWithoutDeleteConfirmationType;
export interface ForceDeleteDialogType {
    onClickDelete: () => void;
    closeDeleteModal: () => void;
    forceDeleteDialogTitle: string;
    forceDeleteDialogMessage: string;
}
export interface DialogFormProps {
    className: string;
    title: string;
    isLoading: boolean;
    closeOnESC?: boolean;
    close: (event: any) => void;
    onSave: (event: any) => void;
    headerClassName?: string;
}
export {};
