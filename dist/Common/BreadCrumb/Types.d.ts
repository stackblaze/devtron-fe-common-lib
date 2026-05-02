export interface Breadcrumb {
    to: string;
    name: string;
    className?: string;
}
export interface UseBreadcrumbState {
    breadcrumbs: Breadcrumb[];
    setCrumb: (props: {
        [key: string]: any;
    }) => void;
    resetCrumb: (props: string[]) => void;
}
export interface AdvancedAlias {
    component: any;
    linked: boolean;
}
export interface UseBreadcrumbProps {
    sep?: string;
    alias?: {
        [key: string]: AdvancedAlias | any;
    };
}
export interface Breadcrumbs {
    breadcrumbs: Breadcrumb[];
    path: string;
    sep?: string;
    className?: string;
}
export type UseBreadcrumbOptionalProps = UseBreadcrumbProps | null;
export interface BreadcrumbTextProps {
    heading: string;
    isActive?: boolean;
    /**
     * @default false
     */
    shouldTruncate?: boolean;
}
export interface NestedBreadCrumbProps {
    /**
     * It is the url to which the link should redirect
     */
    redirectUrl: string;
    /**
     * It is the text of the link
     */
    linkText: string;
    /**
     * It is the name of the profile
     * If not given, would show "Create Profile"
     */
    profileName: string;
    /**
     * @default Profiles
     * It is the text of the nested breadcrumb
     */
    nestedBreadCrumbsText?: string;
}
