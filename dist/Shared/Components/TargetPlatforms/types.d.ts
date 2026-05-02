import { TooltipProps } from '../../../Common/Tooltip';
import { TargetPlatformsDTO } from '../../types';
export interface TargetPlatformBadgeListProps extends Required<Pick<TargetPlatformsDTO, 'targetPlatforms'>> {
}
export interface TargetPlatformListTooltipProps extends Pick<TargetPlatformsDTO, 'targetPlatforms'>, Pick<TooltipProps, 'children' | 'appendTo'> {
}
