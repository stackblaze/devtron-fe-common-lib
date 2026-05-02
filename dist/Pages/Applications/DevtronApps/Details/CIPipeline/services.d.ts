import { APIOptions } from '../../../../../Common/Types';
import { UploadFileDTO, UploadFileProps } from '../../../../../Shared/types';
export declare const uploadCIPipelineFile: ({ file, appId, ciPipelineId, envId, allowedExtensions, maxUploadSize, abortControllerRef, }: {
    appId: number;
    ciPipelineId: number;
    envId?: number;
} & UploadFileProps & Pick<APIOptions, "abortControllerRef">) => Promise<UploadFileDTO>;
