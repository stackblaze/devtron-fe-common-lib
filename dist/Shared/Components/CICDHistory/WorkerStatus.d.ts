import { JSX } from 'react';
import { WorkerStatusType } from './types';
declare const WorkerStatus: import('react').MemoExoticComponent<({ message, podStatus, stage, workerPodName, finishedOn, clusterId, namespace, workerMessageContainerClassName, titleClassName, viewWorkerPodClassName, hideShowMoreMessageButton, children, }: WorkerStatusType) => JSX.Element | null>;
export default WorkerStatus;
