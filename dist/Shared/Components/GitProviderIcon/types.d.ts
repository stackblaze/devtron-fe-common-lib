import { GitProviderType } from '../../../Common/Constants';
import { IconsProps } from '../Icon';
export type GitProviderIconProps = {
    /**
     * The size of the icon in pixels.
     * @default 20
     */
    size?: IconsProps['size'];
} & ({
    gitProvider: GitProviderType;
    gitRepoUrl?: never;
} | {
    gitProvider?: never;
    gitRepoUrl: string;
});
