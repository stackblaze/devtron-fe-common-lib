import { RegistryType } from '../../types';
import { IconsProps } from '../Icon';
export type RegistryIconProps = {
    registryType: RegistryType;
    /**
     * The size of the icon in pixels.
     * @default 20
     */
    size?: IconsProps['size'];
    /**
     * The registry URL to determine the icon.
     */
    registryUrl?: never;
} | {
    registryType?: never;
    /**
     * The size of the icon in pixels.
     * @default 20
     */
    size?: IconsProps['size'];
    /**
     * The registry URL to determine the icon.
     */
    registryUrl: string;
};
