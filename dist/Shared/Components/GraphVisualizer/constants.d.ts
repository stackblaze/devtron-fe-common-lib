import { NodeTypes, Viewport } from '@xyflow/react';
declare const nodeTypes: {
    iconNode: ({ data, id, isConnectable }: import('@xyflow/react').NodeProps<import('./components').IconNodeProps>) => import("react/jsx-runtime").JSX.Element;
    textNode: ({ id, data, isConnectable }: import('@xyflow/react').NodeProps<import('./components').TextNodeProps>) => import("react/jsx-runtime").JSX.Element;
    dropdownNode: ({ id, data, isConnectable }: import('@xyflow/react').NodeProps<import('./components').DropdownNodeProps>) => import("react/jsx-runtime").JSX.Element;
};
export declare const NODE_TYPES: NodeTypes;
export declare const NODE_WIDTH_MAP: Record<keyof typeof nodeTypes, number>;
export declare const NODE_HEIGHT_MAP: Record<keyof typeof nodeTypes, number>;
export declare const PADDING_X = 16;
export declare const PADDING_Y = 20;
export declare const NODE_GAP_X = 50;
export declare const NODE_GAP_Y = 12;
export declare const DEFAULT_VIEWPORT: Viewport;
export {};
