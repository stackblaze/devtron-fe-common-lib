import { EditImageFormFieldProps } from './types';
/**
 * @example
 * ```tsx
 * <EditImageFormField
 *      url={icon}
 *      defaultIcon={<ICSampleIcon className="w-100 h-100 dc__opacity-1 p-5" />}
 *      errorMessage={formError.icon}
 *      handleError={handleError}
 *      handleURLChange={handleURLChange}
 *      ariaLabelPrefix="Edit icon url"
 *      dataTestIdPrefix="edit-icon-url"
 *      altText="Form icon"
 *  />
 * ```
 */
declare const EditImageFormField: ({ defaultIcon, errorMessage, handleError, url, handleURLChange, ariaLabelPrefix, dataTestIdPrefix, altText, }: EditImageFormFieldProps) => import("react/jsx-runtime").JSX.Element;
export default EditImageFormField;
