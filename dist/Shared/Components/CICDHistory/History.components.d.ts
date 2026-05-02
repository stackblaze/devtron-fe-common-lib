import { JSX } from 'react';
import { GitChangesType, LogResizeButtonType, ScrollerType } from './types';
export declare const LogResizeButton: ({ shortcutCombo, showOnlyWhenPathIncludesLogs, fullScreenView, setFullScreenView, }: LogResizeButtonType) => JSX.Element;
export declare const Scroller: ({ scrollToTop, scrollToBottom, style }: ScrollerType) => JSX.Element;
export declare const GitChanges: ({ gitTriggers, ciMaterials, artifact, userApprovalMetadata, triggeredByEmail, ciPipelineId, artifactId, imageComment, imageReleaseTags, appReleaseTagNames, tagsEditable, hideImageTaggingHardDelete, appliedFilters, appliedFiltersTimestamp, promotionApprovalMetadata, selectedEnvironmentName, renderCIListHeader, targetPlatforms, isDeploymentWithoutApproval, }: GitChangesType) => import("react/jsx-runtime").JSX.Element;
