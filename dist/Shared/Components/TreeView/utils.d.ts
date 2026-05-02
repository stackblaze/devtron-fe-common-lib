import { GetSelectedIdParentNodesProps, GetVisibleNodesProps } from './types';
/**
 * Retrieves an array of parent node IDs for the currently selected node.
 *
 * Iterates through the provided tree nodes and collects the IDs of all parent nodes
 * leading to the node identified by `selectedId`. If no node is selected, returns an empty array.
 *
 * @returns {string[]} An array of parent node IDs for the selected node, or an empty array if no node is selected.
 */
export declare const getSelectedIdParentNodes: <DataAttributeType = null>({ nodes, selectedId, }: GetSelectedIdParentNodesProps<DataAttributeType>) => string[];
/**
 * Recursively traverses a list of tree nodes and returns an array of all node IDs that are present in DOM.
 *
 * For each node in the provided list:
 * - Adds the node's `id` to the result array.
 * - If the node is of type `'heading'`, is expanded (as per `expandedMap`), and has child items,
 *   recursively traverses its child items and includes their IDs as well.
 *
 * @param nodeList - The list of nodes to traverse.
 * @returns An array of strings representing the IDs of all traversed nodes.
 */
export declare const getVisibleNodes: <DataAttributeType = null>({ nodeList, expandedMap, }: GetVisibleNodesProps<DataAttributeType>) => string[];
