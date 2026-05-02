import { ComponentProps } from 'react';
import { default as RJSFForm } from '@rjsf/core';
import { StrictRJSFSchema } from '@rjsf/utils';
export interface MetaHiddenType {
    value: any;
    path: string;
}
export type HiddenType = MetaHiddenType | {
    condition: any;
    value: string;
} | string;
export interface RJSFFormSchema extends StrictRJSFSchema {
    properties?: {
        [key: string]: RJSFFormSchema;
    };
    hidden?: HiddenType;
    updatePath?: string;
}
export type FormProps = Omit<ComponentProps<typeof RJSFForm<any, RJSFFormSchema>>, 'validator'>;
export interface UpdateFormDataFromFormStateProps {
    /**
     * formData is data that is being passed from the user
     */
    formData: Record<string, unknown>;
    /**
     * formState is the latest state of the form
     */
    formState: Record<string, unknown>;
    schemaPathToUpdatePathMap: Record<string, string>;
}
export interface GetFormStateFromFormDataProps extends Pick<UpdateFormDataFromFormStateProps, 'formData' | 'schemaPathToUpdatePathMap'> {
}
