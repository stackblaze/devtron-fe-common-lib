import { IllustrationBaseProps } from './types';
export declare const illustrationMap: {
    'empty-state-key': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-celebration': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-folder-create': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-folder-empty': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-install-freemium-saas': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-install-via-aws-marketplace': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-installing-devtron': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-mechanical-operation': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-no-backup-location': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-no-restores': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-page-not-found': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'img-user-groups': import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    'create-backup-schedule': string;
    'create-backup-snapshot': string;
    'img-code': string;
    'img-devtron-freemium': string;
    'img-man-on-rocket': string;
    'img-no-result': string;
    'no-cluster-cost-enabled': string;
};
export type IllustrationName = keyof typeof illustrationMap;
export interface IllustrationProps extends Omit<IllustrationBaseProps, 'name' | 'illustrationMap'> {
    /**
     * The name of the illustration to render.
     * @note The component will return either an img component or an SVG component based on the type of illustration (.svg, .webp)
     */
    name: keyof typeof illustrationMap;
}
export declare const Illustration: (props: IllustrationProps) => import("react/jsx-runtime").JSX.Element;
