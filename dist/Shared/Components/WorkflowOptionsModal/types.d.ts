import { WorkflowNodeType } from '../../../Common/Types';
import { ChangeCIPayloadType, CIPipelineNodeType, WorkflowType } from '../../types';
import { AppConfigProps } from '../../../Pages/index';
import { GenericModalProps } from '../GenericModal';
import { IconsProps } from '../Icon';
export interface SourceTypeCardProps {
    title: string;
    subtitle: string;
    dataTestId: string;
    type: CIPipelineNodeType | WorkflowNodeType.WEBHOOK;
    disabled?: boolean;
    disableInfo: string;
    icons: Pick<IconsProps, 'name' | 'color'>[];
    onCardAction: (e: React.MouseEvent | React.KeyboardEvent) => void;
}
export interface WorkflowOptionsModalProps extends Required<Pick<AppConfigProps, 'isTemplateView'>>, Pick<GenericModalProps, 'open' | 'onClose'> {
    addCIPipeline: (type: CIPipelineNodeType, workflowId?: number | string) => void;
    addWebhookCD: (workflowId?: number | string) => void;
    addLinkedCD: (changeCIPayload?: ChangeCIPayloadType) => void;
    showLinkedCDSource: boolean;
    resetChangeCIPayload: () => void;
    changeCIPayload?: ChangeCIPayloadType;
    workflows?: WorkflowType[];
    getWorkflows?: () => void;
    linkedCDSourceVariant?: Pick<SourceTypeCardProps, 'title' | 'subtitle' | 'type' | 'icons' | 'dataTestId'>;
    isAppGroup?: boolean;
}
