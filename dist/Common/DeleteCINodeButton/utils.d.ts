import { AppConfigProps } from '../../Pages/index';
export declare function savePipeline(request: any, { isRegexMaterial, isTemplateView, }: Required<Pick<AppConfigProps, 'isTemplateView'>> & {
    isRegexMaterial?: boolean;
}): Promise<any>;
export declare function deleteWorkflow(appId: string, workflowId: number, isTemplateView: AppConfigProps['isTemplateView']): Promise<import('..').ResponseType<any>>;
