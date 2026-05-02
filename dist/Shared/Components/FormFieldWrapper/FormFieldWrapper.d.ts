import { FormFieldWrapperProps } from './types';
declare const FormFieldWrapper: ({ layout, fullWidth, label, inputId, error, helperText, warningText, required, children, labelTippyCustomizedConfig, labelTooltipConfig, hideFormFieldInfo, }: Omit<Required<FormFieldWrapperProps>, "hideFormFieldInfo"> & Pick<FormFieldWrapperProps, "hideFormFieldInfo">) => import("react/jsx-runtime").JSX.Element;
export default FormFieldWrapper;
