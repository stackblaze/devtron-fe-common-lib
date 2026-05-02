import { Edge } from '@xyflow/react';
import { GraphVisualizerExtendedNode, GraphVisualizerProps } from './types';
/**
 * Processes edges by assigning a default type and customizing the marker (arrow style).
 *
 * @param edges - List of all edges representing connections between nodes.
 * @returns A new array of edges with updated properties.
 */
export declare const processEdges: (edges: GraphVisualizerProps["edges"]) => Edge[];
/**
 * Processes nodes by calculating their positions based on parent-child relationships.
 *
 * @param nodes - List of all nodes in the graph.
 * @param edges - List of all edges representing parent-child relationships.
 * @returns A new array of nodes with computed positions.
 */
export declare const processNodes: (nodes: GraphVisualizerProps["nodes"], edges: GraphVisualizerProps["edges"]) => GraphVisualizerExtendedNode[];
