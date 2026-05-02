import { SelectPickerOptionType } from '../../Shared/Components';
import { NodeDrainRequest } from './types';
export declare const ALL_NAMESPACE_OPTION: Readonly<Pick<SelectPickerOptionType<string>, 'value' | 'label'>>;
export declare const DRAIN_NODE_MODAL_MESSAGING: {
    DrainIcon: import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    GracePeriod: {
        heading: string;
        infoText: string;
    };
    DeleteEmptyDirectoryData: {
        heading: string;
        infoText: string;
    };
    DisableEviction: {
        heading: string;
        infoText: string;
    };
    ForceDrain: {
        heading: string;
        infoText: string;
    };
    IgnoreDaemonSets: {
        heading: string;
        infoText: string;
    };
    Actions: {
        infoText: string;
        drain: string;
        draining: string;
        cancel: string;
    };
};
export declare const CORDON_NODE_MODAL_MESSAGING: {
    UncordonIcon: import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    CordonIcon: import('react').FunctionComponent<import('react').SVGProps<SVGSVGElement>>;
    cordonInfoText: string;
    uncordonInfoText: string;
    cordon: string;
    uncordon: string;
    cordoning: string;
    uncordoning: string;
    cancel: string;
};
export declare const DELETE_NODE_MODAL_MESSAGING: {
    subtitle: import("react/jsx-runtime").JSX.Element;
    successInfoToastMessage: string;
};
export declare const NODE_DRAIN_OPTIONS_CHECKBOX_CONFIG: {
    key: Exclude<keyof NodeDrainRequest['nodeDrainOptions'], 'gracePeriodSeconds'>;
    infoText: string;
    label: string;
}[];
export declare const GVK_FILTER_KIND_QUERY_PARAM_KEY = "gvkFilterKind";
export declare const GVK_FILTER_API_VERSION_QUERY_PARAM_KEY = "gvkFilterApiVersion";
export declare const K8S_EMPTY_GROUP = "k8sEmptyGroup";
