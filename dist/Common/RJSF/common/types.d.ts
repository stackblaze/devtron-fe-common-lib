import { FieldTemplateProps } from '@rjsf/utils';
export interface FieldRowProps extends Pick<FieldTemplateProps, 'children' | 'label' | 'required' | 'id' | 'rawDescription'> {
    showLabel?: boolean;
    /**
     * @default true
     */
    shouldAlignCenter?: boolean;
}
