import { CIMaterialType } from '../../Services/app.types';
export interface MaterialHistoryProps {
    material: CIMaterialType;
    pipelineName: string;
    selectCommit?: (commitId: string) => void;
    isCommitInfoModal?: boolean;
}
