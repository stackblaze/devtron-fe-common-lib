import { MetricsInfoCardProps, SectionEmptyStateProps } from './types';
export declare const SectionEmptyState: ({ iconName, iconColor, title, subtitle, buttonConfig, }: SectionEmptyStateProps) => import("react/jsx-runtime").JSX.Element;
export declare const MetricsInfoLoadingCard: ({ withSubtitle }: {
    withSubtitle?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
export declare const MetricsInfoCard: ({ dataTestId, metricTitle, metricValue, metricUnit, valueOutOf, iconName, subtitle, redirectionLink, tooltipContent, subtitleRedirection, }: MetricsInfoCardProps) => import("react/jsx-runtime").JSX.Element;
export declare const LoadingDonutChart: () => import("react/jsx-runtime").JSX.Element;
