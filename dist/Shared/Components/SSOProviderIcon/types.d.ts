import { SSOProvider } from '../../../Common/Constants';
import { IconsProps } from '../Icon';
export interface SSOProviderIconProps {
    provider: SSOProvider;
    /**
     * The size of the icon in pixels.
     * @default 20
     */
    size?: IconsProps['size'];
}
