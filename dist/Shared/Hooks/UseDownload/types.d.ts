import { ServerErrors } from '../../../Common/ServerError';
export interface HandleDownloadProps {
    downloadUrl: string;
    showFilePreparingToast?: boolean;
    fileName?: string;
    showSuccessfulToast?: boolean;
    downloadSuccessToastContent?: string;
}
export interface UseDownloadProps {
    /**
     * If true, the download will open in a new tab
     *
     * @default false
     */
    shouldOpenInNewTab?: boolean;
}
export interface UseDownloadReturnType {
    handleDownload: (props: HandleDownloadProps) => Promise<Error | ServerErrors>;
    isDownloading: boolean;
}
