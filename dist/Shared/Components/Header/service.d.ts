import { ResponseType } from '../../../Common';
import { ServerInfoResponse } from './types';
export declare const updatePostHogEvent: (payload: any) => Promise<ResponseType>;
export declare const getServerInfo: (withoutStatus: boolean, isFormHeader: boolean) => Promise<ServerInfoResponse>;
